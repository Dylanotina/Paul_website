import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (

    <div className="min-h-screen">
    <Header/>
    <div className="relative isolate px-6 pt-20 lg:px-8 ">
      <h1 className="text-3xl font-bold mb-24 text-center">About us</h1>

      <div className="flex flex-row pb-16">
        <img src="src\assets\sieuwert-otterloo-aren8nutd1Q-unsplash.jpg" height='500' width='500'></img>
        <div className="ml-8">
          <h3 className="text-xl font-semibold uppercase mb-4">Subtitle</h3>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Tempus
            sollicitudin ornare massa ut pellentesque. Consequat curabitur
            consequat leo, penatibus sem facilisis. Egestas nascetur nulla
            efficitur non elit nec hendrerit. Elementum aenean sociosqu posuere;
            iaculis enim lorem. Porta dictum suspendisse hendrerit semper quis
            euismod. Mattis nisl class primis dictumst dictum nostra. Lobortis
            metus nostra; augue montes elit massa. Montes tristique dis risus
            habitasse nulla torquent commodo inceptos nostra.
          </p>
        </div>
      </div>

      <div className="flex flex-row-reverse pb-16">
        <img src="src\assets\flo-pappert-kspRwqFxOms-unsplash.jpg" height='500' width='500'></img>
        <div className="mr-8">
          <h3 className="text-xl font-semibold uppercase mb-4">Subtitle</h3>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Tempus
            sollicitudin ornare massa ut pellentesque. Consequat curabitur
            consequat leo, penatibus sem facilisis. Egestas nascetur nulla
            efficitur non elit nec hendrerit. Elementum aenean sociosqu posuere;
            iaculis enim lorem. Porta dictum suspendisse hendrerit semper quis
            euismod. Mattis nisl class primis dictumst dictum nostra. Lobortis
            metus nostra; augue montes elit massa. Montes tristique dis risus
            habitasse nulla torquent commodo inceptos nostra.
          </p>
        </div>
        </div>

        <div className="flex flex-row">
        <img src="src\assets\etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg" height='500' width='500'></img>
        <div className="ml-8">
          <h3 className="text-xl font-semibold uppercase mb-4">Subtitle</h3>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Tempus
            sollicitudin ornare massa ut pellentesque. Consequat curabitur
            consequat leo, penatibus sem facilisis. Egestas nascetur nulla
            efficitur non elit nec hendrerit. Elementum aenean sociosqu posuere;
            iaculis enim lorem. Porta dictum suspendisse hendrerit semper quis
            euismod. Mattis nisl class primis dictumst dictum nostra. Lobortis
            metus nostra; augue montes elit massa. Montes tristique dis risus
            habitasse nulla torquent commodo inceptos nostra.
          </p>
        </div>
      </div>


      </div>
      <Footer/>
      </div>
  );
}

export default About;
