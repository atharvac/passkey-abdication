from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import filters, status, viewsets
from rest_framework.response import Response
from .serializers import UsernamePasswordSerializer

from selenium import webdriver
from selenium.webdriver.common.by import By
import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from time import sleep

# Create your views here.

def start_selenium(username, password):
    options = uc.ChromeOptions()
    # Configure options as needed
    # options.add_argument('--headless')  # Optional, if you don't want a GUI.
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument('--disable-blink-features=AutomationControlled')
    driver = webdriver.Chrome(options=options)
    driver.get('https://myaccount.google.com/signinoptions/passkeys')
    username_input_elem = driver.find_element(By.NAME, "identifier")
    username_input_elem.send_keys(username)

    next_elem = driver.find_element(By.XPATH, "/html/body/div[1]/div[1]/div[2]/c-wiz/div/div[3]/div/div[1]/div/div/button")
    next_elem.click()

    password_elem = WebDriverWait(driver, 5).until(EC.presence_of_element_located((By.NAME, "Passwd")))
    # password_elem = driver.find_element(By.NAME, "Passwd")
    password_elem.send_keys(password)

    next_passwd_elem = driver.find_element(By.XPATH, '//*[@id="passwordNext"]/div/button')
    next_passwd_elem.click()

    create_passkey_elem = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "/html/body/c-wiz/div/div[2]/div[2]/c-wiz/div/div/c-wiz/div/div[1]/div[3]/div[2]/div/div/button")))
    create_passkey_elem.click()
    

@api_view(["POST"])
def get_username_and_password(request, format=None):
    serializer = UsernamePasswordSerializer(data=request.data)
    if serializer.is_valid():
        response_data = serializer.validated_data
        username = response_data.get("username")
        password = response_data.get("password")
        start_selenium(username=username, password=password)
        sleep(10)
    return Response(status=status.HTTP_200_OK)