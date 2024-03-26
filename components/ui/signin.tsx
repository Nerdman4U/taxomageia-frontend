import Link from "next/link";
import * as config from "@/config";

const SignIn = () => {
  return (
    <>
      {/* Desktop sign in links */}
      <ul className="flex grow justify-end flex-wrap items-center">
        <li>
          <Link
            href={config.signin}
            className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
          >
            Sign in
          </Link>
        </li>
        <li>
          <Link
            href={config.signup}
            className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
          >
            Sign up
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SignIn;
