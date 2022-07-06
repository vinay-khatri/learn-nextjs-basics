import Head from 'next/head'
import Image from 'next/image'

const Fruits = () => {
    const imageRef = (name) => {
        return `https://storage.googleapis.com/go-veg/global/images/public/${name}.jpg`
    }
    return (
        <div className="page fruits-page">

            <div className="card-land">
                <Image src={imageRef(`vegies-land`)} layout="fill" priority />
            </div>
            <br />

            <div className="row">
                <div className="eCard-small">
                    <p className="title">Cucumber</p>
                    <Image src={imageRef(`vegies-cucumber`)} layout="fill" />
                    <p className="price">XX / kg</p>
                </div>
                <div className="eCard-small">
                    <p className="title">Potato</p>
                    <Image src={imageRef(`vegies-potato`)} layout="fill" />
                    <p className="price">XX / kg</p>
                </div>
                <div className="eCard-small">
                    <p className="title">Cabbage</p>
                    <Image src={imageRef(`vegies-cabbage`)} layout="fill" />
                    <p className="price">XX / kg</p>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="eCard-small">
                    <p className="title">Carrot</p>
                    <Image src={imageRef(`vegies-carrot`)} layout="fill" />
                    <p className="price">XX / kg</p>
                </div>
                <div className="eCard-small">
                    <p className="title">Brocalli</p>
                    <Image src={imageRef(`vegies-brocalli`)} layout="fill" />
                    <p className="price">XX / kg</p>
                </div>
                <div className="eCard-small">
                    <p className="title">Tomato</p>
                    <Image src={imageRef(`vegies-tomato`)} layout="fill" />
                    <p className="price">XX / kg</p>
                </div>
            </div>
            <br />

            <div className="row">

            </div>

        </div>
    );
}

export default Fruits;