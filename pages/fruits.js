import Head from 'next/head'
import Image from 'next/image'

const Fruits = () => {
    const imageRef = (name) => {
        return `https://storage.googleapis.com/go-veg/global/images/public/${name}.jpg`
    }
    return (
        <div className="page fruits-page">
            <div className="card-land">
                {/* <Image src={imageRef(`fruits-land`)} layout="fill" priority /> */}
                <img src="https://storage.googleapis.com/go-veg/global/images/public/fruits-land.jpg" />
            </div>
            <br />

            <div className="row">
                <div className="eCard-small">
                    <p className="title">Orange</p>
                    <Image src={imageRef(`fruits-orange`)} layout="fill" />
                    <p className="price">XX / kg</p>
                </div>
                <div className="eCard-small">
                    <p className="title">Strawberry</p>
                    <Image src={imageRef(`fruits-strawberry`)} layout="fill" />
                    <p className="price">XX / kg</p>
                </div>
                <div className="eCard-small">
                    <p className="title">Banana</p>
                    <Image src={imageRef(`fruits-banana`)} layout="fill" />
                    <p className="price">XX / kg</p>
                </div>
            </div>

        </div>
    );
}

export default Fruits;