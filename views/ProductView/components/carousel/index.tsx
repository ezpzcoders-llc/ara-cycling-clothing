import { useState } from 'react'
import { StyledCarousel } from './StyledCarousel'
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material'
const CAROUSEL = 'carousel'
export const Carousel = ({ data }: any) => {
    const [activeImg, setActiveImg] = useState<number>(0)

    const getNextImg = () => {
        setActiveImg(prevActive => {
            if (prevActive === data?.length - 1) {
                return 0
            } else {
                return prevActive + 1
            }
        })
    }

    const getPreviousImg = () => {
        setActiveImg(prevActive => {
            if (prevActive === 0) {
                return data?.length - 1
            } else {
                return prevActive - 1
            }
        })
    }

    return (
        <StyledCarousel>
            <div className="arrow" onClick={getPreviousImg}>
                <ArrowBackIos />
            </div>
            <div className="img-container">
                {data
                    ?.filter((image: any) => image.image_type === CAROUSEL)
                    .map((data: any, index: number) => {
                        return (
                            <img
                                style={{
                                    display: `${
                                        index !== activeImg ? 'none' : 'block'
                                    }`
                                }}
                                src={data.image_src}
                                alt={data.image_alt_text}
                                key={index}
                                className="img"
                            />
                        )
                    })}
            </div>
            <div className="arrow" onClick={getNextImg}>
                <ArrowForwardIos />
            </div>
        </StyledCarousel>
    )
}
