import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Register() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 h-screen bg-gray-950">
      {/* LEFT SIDE */}
      <div className="text-white flex justify-center items-center flex-col px-6">
        <h2 className="text-4xl md:text-5xl font-bold my-3 text-center">
          Welcome Back to <span className="text-primary">TicketHub</span>
        </h2>

        <p className="text-md text-gray-400 text-center">
          Manage issues, track progress, and stay in control
        </p>
        <p className="text-md text-gray-400 text-center">
          all from one powerful dashboard.
        </p>

        <form className="my-8 w-full px-6  2xl:px-64">
          <div className="mb-8">
            <Label className="mb-2" htmlFor="email">
              Username
            </Label>
            <Input
              type="text"
              className="bg-gray-800 border-0 focus:shadow-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <div className="mb-8">
            <Label className="mb-2" htmlFor="email">
              Email
            </Label>
            <Input
              type="email"
              className="bg-gray-800 border-0 focus:shadow-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <div className="mb-8">
            <Label className="mb-2" htmlFor="email">
              PhoneNumber
            </Label>
            <Input
              type="email"
              className="bg-gray-800 border-0 focus:shadow-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <div className="mb-8">
            <Label className="mb-2" htmlFor="email">
              Departements
            </Label>
            <Select>
              <SelectTrigger className="bg-gray-800 border-0 w-full focus:shadow-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
                <SelectValue placeholder="Select a departement" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white border-none outline-none">
                <SelectGroup>
                  <SelectLabel>Departements</SelectLabel>
                  <SelectItem value="apple">IT</SelectItem>
                  <SelectItem value="banana">HR</SelectItem>
                  <SelectItem value="blueberry">Finance</SelectItem>
                  <SelectItem value="grapes">Sales</SelectItem>
                  <SelectItem value="pineapple">Dev</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-8">
            <Label className="mb-2" htmlFor="password">
              Password
            </Label>
            <Input
              type="password"
              className="bg-gray-800 border-0 focus:shadow-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <div>
            <Label className="mb-2" htmlFor="password">
              Confirm Password
            </Label>
            <Input
              type="password"
              className="bg-gray-800 border-0 focus:shadow-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <Button className="mt-6 w-full bg-primary">Login</Button>

          <p className="mt-3 text-center">
            You already have an account?
            <Link to={"/login"}>
              <span className="text-primary font-bold"> Login</span>
            </Link>
          </p>
        </form>
      </div>

      {/* RIGHT SIDE IMAGE — hidden on phone/tablet */}
      <div className="h-screen hidden lg:block">
        <img
          className="h-full w-full bg-cover object-cover"
          src="/images/login.jpeg"
          alt=""
        />
      </div>
    </section>
  );
}

export default Register;
