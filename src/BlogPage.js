import React from "react";
import Nav from "./components/Nav";
import Doctable from "./components/doctable";
import blogImage from "./assets/blog.png";
import "./components/CardSlider.css";

export default function BlogPage() {
    return (<>
        <Nav />
        <Doctable />
        <div className="T1">
            <div className="T5">
                <div className="T4">
                        <h1>Expert Blogs from Our Senior Students</h1>
                </div>
                <hr/>
                <div class="d-flex flex-row flex-wrap ">
                    <div class="card mx-2 my-3 d-flex" style={{width:300}}>
                        <img class="card-img-top" src={blogImage} alt="."/>
                        <div class="card-body" style={{backgroundColor:"#212529"}}>
                            <h4 class="card-title" style={{color:"white"}}>EEnterns (Blogs of 2022)</h4>
                            <p class="card-text fs-6" style={{color:"white"}}>Get to know the strategies to crack the code of intern selections & the experience of your seniors who have interned in top notch companies and universities in 8 different sectors.</p>
                            <a href="#" class="btn btn-primary">See Profile</a>
                        </div>
                    </div>
                    <div class="card mx-2 my-3 d-flex" style={{width:300}}>
                        <img class="card-img-top" src={blogImage} alt="."/>
                        <div class="card-body" style={{backgroundColor:"#212529"}}>
                            <h4 class="card-title" style={{color:"white"}}>EEnterns (Blogs of 2022)</h4>
                            <p class="card-text fs-6" style={{color:"white"}}>Get to know the strategies to crack the code of intern selections & the experience of your seniors who have interned in top notch companies and universities in 8 different sectors.</p>
                            <a href="#" class="btn btn-primary">See Profile</a>
                        </div>
                    </div>
                    <div class="card mx-2 my-3 d-flex" style={{width:300}}>
                        <img class="card-img-top" src={blogImage} alt="."/>
                        <div class="card-body" style={{backgroundColor:"#212529"}}>
                            <h4 class="card-title" style={{color:"white"}}>EEnterns (Blogs of 2022)</h4>
                            <p class="card-text fs-6" style={{color:"white"}}>Get to know the strategies to crack the code of intern selections & the experience of your seniors who have interned in top notch companies and universities in 8 different sectors.</p>
                            <a href="#" class="btn btn-primary">See Profile</a>
                        </div>
                    </div>
                    <div class="card mx-2 my-3 d-flex" style={{width:300}}>
                        <img class="card-img-top" src={blogImage} alt="."/>
                        <div class="card-body" style={{backgroundColor:"#212529"}}>
                            <h4 class="card-title" style={{color:"white"}}>EEnterns (Blogs of 2022)</h4>
                            <p class="card-text fs-6" style={{color:"white"}}>Get to know the strategies to crack the code of intern selections & the experience of your seniors who have interned in top notch companies and universities in 8 different sectors.</p>
                            <a href="#" class="btn btn-primary">See Profile</a>
                        </div>
                    </div>
                    <div class="card mx-2 my-3 d-flex" style={{width:300}}>
                        <img class="card-img-top" src={blogImage} alt="."/>
                        <div class="card-body" style={{backgroundColor:"#212529"}}>
                            <h4 class="card-title" style={{color:"white"}}>EEnterns (Blogs of 2022)</h4>
                            <p class="card-text fs-6" style={{color:"white"}}>Get to know the strategies to crack the code of intern selections & the experience of your seniors who have interned in top notch companies and universities in 8 different sectors.</p>
                            <a href="#" class="btn btn-primary">See Profile</a>
                        </div>
                    </div>
                    <div class="card mx-2 my-3 d-flex" style={{width:300}}>
                        <img class="card-img-top" src={blogImage} alt="."/>
                        <div class="card-body" style={{backgroundColor:"#212529"}}>
                            <h4 class="card-title" style={{color:"white"}}>EEnterns (Blogs of 2022)</h4>
                            <p class="card-text fs-6" style={{color:"white"}}>Get to know the strategies to crack the code of intern selections & the experience of your seniors who have interned in top notch companies and universities in 8 different sectors.</p>
                            <a href="#" class="btn btn-primary">See Profile</a>
                        </div>
                    </div>
                    <div class="card mx-2 my-3 d-flex" style={{width:300}}>
                        <img class="card-img-top" src={blogImage} alt="."/>
                        <div class="card-body" style={{backgroundColor:"#212529"}}>
                            <h4 class="card-title" style={{color:"white"}}>EEnterns (Blogs of 2022)</h4>
                            <p class="card-text fs-6" style={{color:"white"}}>Get to know the strategies to crack the code of intern selections & the experience of your seniors who have interned in top notch companies and universities in 8 different sectors.</p>
                            <a href="#" class="btn btn-primary">See Profile</a>
                        </div>
                    </div>
                    <div class="card mx-2 my-3 d-flex" style={{width:300}}>
                        <img class="card-img-top" src={blogImage} alt="."/>
                        <div class="card-body" style={{backgroundColor:"#212529"}}>
                            <h4 class="card-title" style={{color:"white"}}>EEnterns (Blogs of 2022)</h4>
                            <p class="card-text fs-6" style={{color:"white"}}>Get to know the strategies to crack the code of intern selections & the experience of your seniors who have interned in top notch companies and universities in 8 different sectors.</p>
                            <a href="#" class="btn btn-primary">See Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}