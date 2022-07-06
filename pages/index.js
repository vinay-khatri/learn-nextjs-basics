import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    const imageRef = (name) => {
        return `https://storage.googleapis.com/go-veg/global/images/public/${name}.jpg`
    }
    return (
        <div className="page home-page">

            <div className="card-land">
                <Image src={imageRef(`home-land`)} layout="fill" priority />
            </div>

            <br /><h2>On Fire</h2><br />

            <div className="row">
                <div className="eCard-small">
                    <p className="title">Potato</p>
                    <Image src={imageRef(`vegies-potato`)} layout="fill" />
                    <p className="price">XX / kg</p>
                </div>
                <div className="eCard-small">
                    <p className="title">Tomato</p>
                    <Image src={imageRef(`vegies-tomato`)} layout="fill" />
                    <p className="price">XX / kg</p>
                </div>
                <div className="eCard-small">
                    <p className="title">Banana</p>
                    <Image src={imageRef(`fruits-banana`)} layout="fill" />
                    <p className="price">XX / kg</p>
                </div>
            </div>

            <br /><br />

            <div className="card-full">
                <Image src={imageRef(`vegies-land 2`)} layout="fill" />
            </div>

        </div>
    )
}
