"use client"

import Input from "@/app/components/input";
import { useMyContext } from "@/store/myContext";
import Link from "next/navigation";
import { FaBlackberry } from 'react-icons/fa';


export default function Home() {

  const { info, value } = useMyContext();



  return (
    <main>


      <div>


        <Input></Input>



        <h1> <FaBlackberry></FaBlackberry>Next js fine</h1>
        <FaBlackberry></FaBlackberry>
        <h1>

        </h1>


        {info}
        <br />
        {value}





      </div>
    </main>
  )
}
