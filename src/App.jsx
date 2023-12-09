import { useEffect,useState } from "react";

const App = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [image, setImage] = useState(false);
    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=41083244-d8408a8aeee930652994985d9&q=${search}&image_type=photo&pretty=true`)
        .then((res)=>res.json())
        .then(d=>setData(d.hits))
        
    })
    
    var nav=document.getElementById('nav')
    var nav2=document.getElementById('nav2')
    var sec=document.getElementById('sec')
    var main=document.getElementById('main')
    var box1=document.getElementById('box1')
    var bg=document.getElementById('bg');
    function zoomin() {
        box1.style.display='flex';
        main.style.opacity='0.2'
        nav.style.opacity='0.2'
        bg.style.opacity='0.2'
    }
    function zoomout() {
        box1.style.display='none';
        main.style.opacity='1'
        nav.style.opacity='1'
        bg.style.opacity='1'
    }


    var l=document.getElementById('light')
    var d=document.getElementById('dark')
    function light() {
        sec.style.background='white'
        nav.style.background='transparent'
        nav2.style.background='white'
        sec.style.color='black'
        d.style.visibility='visible'
        l.style.visibility='hidden'
    }
    function dark() {
        sec.style.background='black'
        nav.style.background='rgb(86, 88, 97)'
        nav2.style.background='black'
        sec.style.color='white'
        l.style.visibility='visible'
        d.style.visibility='hidden'
    }
    
    useEffect(() => {
        var opt=document.getElementById('opt').value
        console.log(opt)
        
    }, []);
    


    return(
        <section id="sec" >
            <div id="box1" className="fixed h-[100vh] w-full justify-center items-center flex-wrap flex-col z-40  hidden   ">
                <div onClick={zoomout} className="cursor-pointer text-3xl text-red-800 w-auto flex justify-end z-50"><i class="fa-regular fa-circle-xmark"></i></div>    
                <div className="z-50 opacity-100"><img id="Img" src={image} alt="" /> </div>
            </div>

            <nav id="nav" className="sticky top-0 z-30 h-16 w-auto border-2  sm:mx-5 rounded-lg flex flex-wrap justify-between bg-transparent border-transparent" >
                    <div className="my-2 mx-2 sm:mx-4 flex space-x-3 sm:space-x-7">
                        <div className="w-auto ">
                            <img  src="https://th.bing.com/th/id/R.300920f936b3377004e40f48ae7ad419?rik=QaQ1mPG8Ob%2bKWA&riu=http%3a%2f%2fwww.evelynmcmarketing.com%2fwp-content%2fuploads%2f2017%2f04%2fPixabay-Logo.png&ehk=u4NQ1uGk%2foxIzey7crYTtlhQlDG570rNAVlZSOHUDec%3d&risl=&pid=ImgRaw&r=0" height={'64px'} width={'140px'} alt="" />
                        </div>
                    </div>
                    <div className="h-14 w-52 sm:w-80 flex justify-between items-center">
                        <div className="h-10 w-20 flex justify-center items-center rounded-full hover:bg-white hover:opacity-50">Log in</div>
                        <div className="h-10 w-20 hidden justify-center items-center rounded-full bg-white text-black opacity-50 hover:outline-2 hover:outline-white sm:flex" >join</div>
                        <div className="h-10 w-20 flex justify-center items-center bg-green-600 rounded-full text-white hover:bg-green-500">Upload</div>
                        <div id='mode' className="h-14 w-10 border-2 border-red-500 flex flex-col items-center rounded-lg sm:rounded-full cursor-pointer sm:h-8 sm:w-16 sm:flex-row sm:my-3  " ><div id="light" onClick={light} className="h-7 w-full border-2 border-transparent rounded-t-lg text-center bg-white text-black invisible sm:h-7 sm:w-18 sm:rounded-full " >🔆</div> <div id="dark" onClick={dark} className="h-7 w-full border-2 border-transparent rounded-b-lg text-center bg-black text-white sm:h-7 sm:w-18 sm:rounded-full ">🌙</div></div>
                    </div>
                </nav>
            <main>
            <div id="bg" className="relative -top-16  h-[400px] w-auto z-0 bg-pixabay-bg bg-no-repeat bg-cover bg-center flex flex-col  flex-wrap"  >
                <div className="h-96 w-auto flex flex-col justify-center items-center ">
                    <div className="space-y-3">
                    <h1 className="text-2xl sm:text-4xl text-white font-bold">Stunning royalty-free images & royalty-free stock</h1>
                    <p className="text-base text-white">Over 4.2 million+ high quality stock images, videos and music shared by our talented community.</p>
                    <div className="sticky top-2 z-40 border-2 w-[411px] md:w-[800px] h-12 flex flex-wrap justify-start items-center gap-3 px-3 bg-white rounded-full text-green-500">
                        <i class="fa-solid fa-magnifying-glass" ></i>
                        <input id="input" className="w-64 md:w-[350px] lg:w-[600px] h-9 outline-none bg-white text-red-500" type="search" placeholder="Search for all images on Pixabay" onChange={(e)=>setSearch(e.target.value)} />
                        <select name="opt" id="opt" className="h-6 w-4 sm:w-24 text-black">
                                <option className="sm:text-xl" value="">All image</option>
                                <option className="sm:text-xl" value="Food">Food</option>
                                <option className="sm:text-xl" value="sports">Sports</option>
                                <option className="sm:text-xl" value="nature">Nature</option>
                                <option className="sm:text-xl" value="cars">Cars</option>
                                <option className="sm:text-xl" value="space">Space</option>
                                <option className="sm:text-xl" value="animal">Animals</option>
                            </select>
                    </div>
                    </div>
                </div>
            </div>
            <div id='nav2'className="sticky top-0 z-20 h-16 w-auto border-2 mx-2 sm:mx-5 rounded-lg flex flex-wrap justify-between bg-white border-transparent">
                        <div className="sticky top-2 z-20 border-2 w-[411px] md:w-[450px] h-10 hidden flex-wrap justify-start items-center gap-3 px-3 bg-white rounded-full text-green-500 sm:flex mx-60 ">
                            <i class="fa-solid fa-magnifying-glass" ></i>
                            <input id="input" className="w-64 md:w-[350px] lg:w-[380px] h-9 outline-none bg-white text-red-500" type="search" placeholder="Search images you want" onChange={(e)=>setSearch(e.target.value)} />
                        </div>
            </div>
            <div className="h-14 w-96 md:w-[800px] mx-4 md:mx-40 lg:mx-80  flex gap-x-3 items-start overflow-auto ">
                <div className="category"><i class="fa-solid fa-house"> </i>Home</div>
                <div className="category"><i class="fa-solid fa-camera"></i> Photo</div>
                <div className="category"><i class="fa-solid fa-paintbrush"></i> Illustrations</div>
                <div className="category"><i class="fa-solid fa-pen-nib"></i> Vectors</div>
                <div className="category"><i class="fa-solid fa-video"></i> Videos</div>
                <div className="category"><i class="fa-solid fa-music"></i> Music</div>
                <div className="category"><i class="fa-brands fa-soundcloud" /> Sound Effects</div>
                <div className="category"><i class="fa-solid fa-fire-flame-curved" /> GIFs</div>
            </div>
            <div className="h-7 w-96 md:w-[1100px] mx-8 flex space-x-5 items-center overflow-auto ">
                <button className="options">nature</button>
                <button className="options">background</button>
                <button className="options">sky</button>
                <button className="options">christmas</button>
                <button className="options">cat</button>
                <button className="options">winter</button>
                <button className="options">food</button>
                <button className="options">snow</button>
                <button className="options">love</button>
                <button className="options">forest</button>
                <button className="options">flower</button>
                <button className="options">iphone wallpaper</button>
                
            </div>
            <div id="main" className="z-20 my-10 mx-5 h-auto w-auto">
                
                <div className="h-auto w-auto justify-around grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    { data.map((x) => {
                            return(
                                <div key={x.id} id="box" onClick={()=>setImage(x.webformatURL)} className="h-auto w-auto cursor-pointer">
                                    <img onClick={zoomin} src={x.webformatURL} height={x.webformatWidth} width={x.webformatHeight} alt="" />
                                </div>
                            )
                        }
                    ) }
                    
                </div>
            </div>
            </main>
            <hr />

            <footer className="h-auto w-auto flex justify-between flex-wrap ">
                <div className="h-auto w-auto flex flex-col flex-wrap space-y-5 mx-9 my-16">
                    <img className="w-28"  src="https://th.bing.com/th/id/R.300920f936b3377004e40f48ae7ad419?rik=QaQ1mPG8Ob%2bKWA&riu=http%3a%2f%2fwww.evelynmcmarketing.com%2fwp-content%2fuploads%2f2017%2f04%2fPixabay-Logo.png&ehk=u4NQ1uGk%2foxIzey7crYTtlhQlDG570rNAVlZSOHUDec%3d&risl=&pid=ImgRaw&r=0" height={'64px'} width={'150px'} alt="" />
                    <p className="text-gray-600">Over 4.5 million+ high quality stock images, videos and music shared by our talented community.</p>
                    <div className="flex gap-x-5">
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-pinterest"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-facebook"></i>
                    </div>
                </div>
                <div className="h-auto w-auto mx-9 my-16">
                    <table className="h-64 w-96 sm:w-[450px]" >
                        <thead className="font-semibold ">
                           <tr>
                                <td>Discover</td> 
                                <td>Community</td>
                                <td>About</td>
                           </tr>
                        </thead>
                        <tbody className="text-gray-600 ">
                            <tr>
                                <td className="hover:underline ">Editor's Choice</td>
                                <td className="hover:underline ">Blog</td>
                                <td className="hover:underline ">About Us</td>
                            </tr>
                            <tr>
                                <td className="hover:underline ">Curated Collections</td>
                                <td className="hover:underline ">Forum</td>
                                <td className="hover:underline ">FAQ</td>
                            </tr>
                            <tr>
                                <td className="hover:underline ">Pixabay Radio</td>
                                <td className="hover:underline ">Creators</td>
                                <td className="hover:underline ">License Summary</td>
                            </tr>
                            <tr>
                                <td className="hover:underline ">Popular Image</td>
                                <td className="hover:underline ">Camera</td>
                                <td className="hover:underline ">Terms of Service</td>
                            </tr>
                            <tr>
                                <td className="hover:underline ">Popular Videos</td>
                                <td className="hover:underline "></td>
                                <td className="hover:underline ">Privacy Policy</td>
                            </tr>
                            <tr>
                                <td className="hover:underline ">Popular Music</td>
                                <td></td>
                                <td className="hover:underline ">Cookies Policy</td>
                            </tr>
                            <tr>
                                <td className="hover:underline ">Popular Searches</td>
                                <td></td>
                                <td className="hover:underline ">API</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </footer>
            
        </section>
    )
}
export default App
