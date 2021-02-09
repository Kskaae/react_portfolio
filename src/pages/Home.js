import React from "react";

const Portfolio = () => {
    return (<>
    <h2 class="text-center">Kristopher S. Kaae M.S., D-ABMDI</h2>
    <p class="font-italic"></p>
    <h3 class="text-center">Portfolio Page</h3>
    <div class="row-float-center">
        <div class="col-3-sm col-6-lg">
            <h2> Hi, I am Kristopher, this is my Portfolio. </h2>
                <h2> I am aspiring programmer,</h2>
            <h1>Thanks for Looking!</h1>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-3-sm col-12-lg d-flex justify-content-center img-fluid">
                <div class="card.deck card bg-dark card-body">
                  
                    <img class="shadow-lg p-4 mb-4 bg-dark"
                        src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg"
                        alt=""/>
                    <p class="text-center font-italic">"Work to Become"</p>
                </div>
            </div>
        </div>
    </div>
        </>
  
  );
};

export default Portfolio;