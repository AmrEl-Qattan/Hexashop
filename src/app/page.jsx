import Image from "next/image";
import styles from "./page.module.css";
import Hero from '/public/images/hero.svg'

export default function Home() {
  return (
    <>
    <div className="d-flex align-items-center gap-5">
    <div className="col-md-6 d-flex flex-column gap-3 ">
      <h1 className="title text-warning">your best online shop destination!</h1>
      <p className="desc">discover a world of endless shopping possibilities at our online store. browse, choose, and order your favorite products from the comfort of your home </p>
      <button className="btn w-100 bg-warning text-dark">shope now </button>
    </div>

    <div className="col-md-6 mt-3">
    <Image style={{height:"auto"}} className="w-100 " src={Hero} alt="hero"/>
    </div>
    </div>
    </>
  );
}
