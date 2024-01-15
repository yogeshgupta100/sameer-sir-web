import { useState, useEffect } from 'react'

const University = ({color , textCol}) => {
    const [university, setUniversity] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/universities?populate=*`);
                const data = await res.json();
                setUniversity(data.data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, [])

  return (
    <div className="row" style={{
        background: color,
        color:textCol,
        maxWidth:"100vw",
        minHeight:"38vw",
    }}>
        <div className="container1" style={{
            textAlign:"center"
        }}>
            <div className="heading" style={{
                paddingTop:"5.55vw",
                // fontFamily:"Open Sans",
                fontStyle:"normal"
            }}>
                <div className="para" style={{
                    fontWeight:"100",
                    opacity:"0.8",
                    fontSize:"clamp(0.6rem , 1.5vw , 1rem)",
                }}>
                In the footsteps of giants
                </div>
                <div style={{
                    fontSize:"clamp(1.2rem , 2.2vw , 2.4rem)",
                    fontWeight:"600",
                    color:"#fff"
                }}>Top Universities where our mentors teach </div>
                <div className="para" style={{
                    fontWeight:"100",
                    opacity:"0.6",
                    fontSize:"clamp(0.65rem , 1vw , 1.25rem)",
                    width:"100%",
                    display:"flex",
                    justifyContent:"center"
                }}>
                <div style={{width:"80%"}}><p>Our Mentors are the guardians of knowledge, passing down valuable insights and life lessons to the next</p> <p>generation. Their role goes beyond imparting information; they cultivate talent and nurture ambition.</p>  </div>
                </div>
            </div>
        </div>
        <div className="container2-counter" style={{
            display:"flex",
            flexWrap:"no-wrap",
            flexDirection:"row",
            justifyContent:"space-evenly",
            textAlign:"center",
            paddingTop:"2.8vw",
            fontWeight:"800",
            fontSize:"1.67vw",
            paddingBottom:"1.7vw",
        }}>
            {
                university && university.map((uniEle) => (
                    <span className='university-logo' style={{
                        fontFamily:"bebasneue",
                        fontStyle:"normal"
                    }}>
                        <img style={{maxWidth:"80%"}} src={uniEle?.attributes?.logo?.data?.attributes?.url} alt={uniEle.name} />
                    </span>
                ))
            }
        </div>
    </div>
  )
}

University.defaultProps = { 
    color: "rgba(1,160,179,0.1)",
    textCol:"linear-gradient(114.53deg, #35174E 2.06%, #724191 68.61%, #885EB2 110.31%, #6A3F8F 156.01%)"
}

export default University