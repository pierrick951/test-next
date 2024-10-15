import Image from 'next/image';
import phone from "../../assets/telephone.webp"


export const metadata = {
    title: 'Contact',
    description: 'CONtct your compagnie',
  }


export default function contact() {

    return (
        <div className="flex flex-row  items-center justify-center h-96 ">
            <h1 className="  text-4xl ">contact</h1>
            <Image
             className='w-96'
            src={phone} 
            alt="contact with media " 
            width={500}
            height={500}
            />
            
                       
        </div>
    )
}