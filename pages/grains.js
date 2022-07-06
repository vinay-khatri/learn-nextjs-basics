import Head from 'next/head'
import Image from 'next/image'

const Fruits = () => {
    const imageRef = (name) => {
        return `https://storage.googleapis.com/go-veg/global/images/public/${name}.jpg`
    }
    return (
        <div className="page fruits-page">
            <div className="card-land">
                <Image src={imageRef(`grains-land`)} layout="fill" priority />
            </div>
        </div>
    );
}

export default Fruits;