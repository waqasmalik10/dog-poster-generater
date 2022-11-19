import { FC } from "react"

interface Props {
    images: Array<string>
}
const DogsImages: FC<Props> = ({ images }) => {


    return <>
        {
            images.map((image: string, index: number) => <div style={{ width:"30%" , margin: "5px"}} key={index}>
                    <img width='100%' height='200px' src={image} alt='img' />
            </div >)
        }
    </>


}
export default DogsImages