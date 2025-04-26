import PasskeyLeft from "../components/PasskeyLeft";
import PasskeyRight from "../components/PasskeyRight";
const CredentialPage = () => {
    return (
        <main className="bg-google-bg-l">
        <div className="flex flex-col flex-end h-screen justify-center items-center bg-google-bg-l font-[family-name:var(--font-google)] max-w-screen">
          <div className="mb-5 w-[69rem] h-100 grid grid-cols-2 bg-white border-0 border-white rounded-3xl">
            <PasskeyLeft/>
            <PasskeyRight/>
          </div>
          <div className="flex flex-row justify-end items-end w-[69rem] text-xs">
            <span className="px-2 py-1 mx-3 hover:bg-gray-200 rounded-sm cursor-pointer">Help</span>
            <span className="px-2 py-1 mx-3 hover:bg-gray-200 rounded-sm cursor-pointer">Privacy</span>
            <span className="px-2 py-1 mx-3 hover:bg-gray-200 rounded-sm cursor-pointer">Terms</span>
          </div>
        </div>
      </main>
    );
}
export default CredentialPage;