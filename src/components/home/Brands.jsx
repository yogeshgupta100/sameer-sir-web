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
        width:"100%",
        height:"25rem",
        margin:"0",
    }}>
        <div className="container1" style={{
            textAlign:"center"
        }}>
            <div className="heading" style={{
                lineHeight:"0",
                paddingTop:"5rem",
                fontFamily:"Open Sans",
                fontStyle:"normal"
            }}>
                <p style={{
                    color: "#FFF",
                    fontWeight:"300",
                    fontSize:"1.1rem",
                    opacity:"0.8"
                }}>Our partners</p>
                <h2 style={{
                    fontSize:"2.5rem",
                    fontWeight:"700"
                }}>Our Collaborative Network</h2>
                <div className="para pt-2" style={{
                    fontWeight:"100",
                    opacity:"0.8"
                }}>
                <p>Meet the Key Players Shaping Our Design Ecosystem</p>
                {/* <p> voluptas fuga pariatur? Iste eos ea ducimus sit?</p> */}
                </div>
            </div>
        </div>
        <div className="container2" style={{
            display:"flex",
            flexWrap:"wrap",
            flexDirection:"row",
            justifyContent:"space-evenly",
            textAlign:"center",
            paddingTop:"40px",
            fontWeight:"800",
            fontSize:"1.5rem"
        }}>
            {
                brands.map((brand) => (
                    <p style={{
                        fontFamily:"bebasneue",
                        fontStyle:"normal"
                    }}>
                        <img src={`${import.meta.env.VITE_STRAPI_SERVER_URL}${brand?.attributes?.logo?.data?.attributes?.url}`} alt="" />
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