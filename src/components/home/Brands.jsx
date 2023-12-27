import { useState, useEffect } from 'react'

const Brands = ({color , textCol}) => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/partners?populate=*`);
                const data = await res.json();
                setBrands(data.data);
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
        minHeight:"28vw",
    }}>
        <div className="container1" style={{
            textAlign:"center"
        }}>
            <div className="heading" style={{
                paddingTop:"5.55vw",
                fontFamily:"Open Sans",
                fontStyle:"normal"
            }}>
                <h2 style={{
                    fontSize:"3vw",
                    fontWeight:"700",
                    color:"#fff"
                }}>Our Collaborative Network</h2>
                <div className="para" style={{
                    fontWeight:"100",
                    opacity:"0.8",
                    fontSize:"clamp(0.5rem , 2.2vw , 1.2rem)",
                }}>
                <span>Meet the Key Players Shaping Our Design Ecosystem</span>
                </div>
            </div>
        </div>
        <div className="container2" style={{
            display:"flex",
            flexWrap:"wrap",
            flexDirection:"row",
            justifyContent:"space-evenly",
            textAlign:"center",
            paddingTop:"2.8vw",
            fontWeight:"800",
            fontSize:"1.67vw",
            paddingBottom:"1.7vw"
        }}>
            {
                brands.map((brand) => (
                    <p style={{
                        fontFamily:"bebasneue",
                        fontStyle:"normal"
                    }}>
                        {/* <img src={`${import.meta.env.VITE_STRAPI_SERVER_URL}${brand?.attributes?.logo?.data?.attributes?.url}`} alt="" /> */}
                        {brand.attributes.name}
                    </p>
                ))
            }
        </div>
    </div>
  )
}

Brands.defaultProps = { 
    color: "rgba(1,160,179,0.1)",
    textCol:"linear-gradient(114.53deg, #35174E 2.06%, #724191 68.61%, #885EB2 110.31%, #6A3F8F 156.01%)"
}

export default Brands