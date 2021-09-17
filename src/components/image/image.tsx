import { BoxSizingProps } from '../../type/boxsizing'
import { Center, HStack } from '../flex/flex'
import styles from './styles.module.css'

interface ImageProps extends BoxSizingProps {
    children?: React.ReactNode
    style?: object,
    src: string,
    alt?:string,
    w?: string | number
    h?: string | number
}

export const ImageHoverZoom = ({
    children,
    style,
    src,
    alt,
    w,
    h,
    p,
    px,
    py,
    pl,
    pr,
    pt,
    pb,
    m,
    mx,
    my,
    ml,
    mr,
    mt,
    mb,
    ...rest
}: ImageProps) => {
    return (
        <div
            style={{
                width: w || 300,
                height: h || 180,
                marginTop: mt || my || m || 0,
                marginLeft: ml || mx || m || 0,
                marginRight: mr || mx || m || 0,
                marginBottom: mb || my || m || 0,
            }}
            className={styles.wrapper}
            {...rest}>
            <img src={src} alt={src} className={styles.image} />
            <div
                style={{
                    paddingTop: pt || py || p || 10,
                    paddingLeft: pl || px || p || 10,
                    paddingRight: pr || px || p || 10,
                    paddingBottom: pb || py || p || 10,
                }}
                className={styles.inner}>
                <p className={styles.text}>{alt}</p>
                <div className={styles.groupBtn}>
                    <button className={styles.button}>Continue</button>
                    <button className={styles.button}>Cancel</button>
                </div>
            </div>
        </div>
    )
}
