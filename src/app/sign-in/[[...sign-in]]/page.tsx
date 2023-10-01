import Wrapper from "@/components/view/Wrapper";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <Wrapper className="">
            <div className="flex justify-center items-center w-full">
                <SignIn afterSignUpUrl={"/"} />
            </div>
        </Wrapper>
    );
}
