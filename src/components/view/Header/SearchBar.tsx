import { Input } from "@/components/ui/input";

import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className='hidden lg:flex items-center w-[30%] border px-[5px] py-0 rounded-[5px] border-solid border-[#e4e5eb] '>
      <CiSearch className='mr-2' />

      <Input type='text' placeholder='What you looking for' />
    </div>
  );
};

export default SearchBar;
