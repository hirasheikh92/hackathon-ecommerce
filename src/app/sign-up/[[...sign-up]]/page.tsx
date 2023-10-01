import Wrapper from "@/components/view/Wrapper";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <Wrapper className="">
            <div className="flex justify-center items-center w-full">
                <SignUp afterSignUpUrl={"/"}
                />
            </div>
        </Wrapper>
    );
}
