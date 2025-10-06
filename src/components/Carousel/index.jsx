import logo from "/logo.png"

import styles from "./Carousel.module.sass"

const alt = "Photo d'enfant pendant une activité Montessori"

function loadPictures() {
    const modules = import.meta.glob(
        "../../assets/carousel/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP}",
        {
            eager: true,
            query: "?url",
            import: "default"
        }
    )

    return Object.values(modules)
}

function shuffle(arr) {
    const a = [...arr]

    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]]
    }

    return a
}

export default function Carousel() {
    const pics = loadPictures()

    const row1 = shuffle(pics)
    const row2 = shuffle(pics)
    const row3 = shuffle(pics)

    return (
        <div className={ styles.carousel }>
            <div className={ styles.rowsContainer }>
                <div className={ `${ styles.row } ${ styles.row1 }` }>
                    { row1.map((src, i) =>
                        <img
                            className={ styles.pic }
                            key={ i }
                            src={ src }
                            alt={ alt }
                        />
                    ) }

                    { row1.map((src, i) =>
                        <img
                            className={ styles.pic }
                            key={ `clone1-${ i }` }
                            src={ src }
                            alt={ alt }
                            />
                    ) }
                </div>

                <div className={ `${ styles.row } ${ styles.rowRight } ${ styles.row2 }` }>
                    { row2.map((src, i) =>
                        <img
                            className={ styles.pic }
                            key={ i }
                            src={ src }
                            alt={ alt }
                        />
                    ) }

                    { row2.map((src, i) =>
                        <img className={ styles.pic }
                            key={ `clone2-${ i }` }
                            src={ src }
                            alt={ alt }
                        />
                    ) }
                </div>

                <div className={ `${ styles.row } ${ styles.row3 }`}>
                    { row3.map((src, i) =>
                        <img
                            className={ styles.pic }
                            key={ i }
                            src={ src }
                            alt={ alt }
                        />
                    ) }

                    { row3.map((src, i) =>
                        <img
                            className={ styles.pic }
                            key={ `clone3-${ i }` }
                            src={ src }
                            alt={ alt }
                        />
                    ) }
                </div>
            </div>

            <div className={ styles.card }>
                <div className={ styles.thanks }>
                    <h1>MERCI pour votre soutien <i class="fa-regular fa-heart"></i></h1>
                    <p className={ styles.text }>Votre générosité contribue<br/>à faire grandir nos enfants<br />dans un environnement bienveillant.</p>
                </div>
                <div className={ styles.footer }>
                    <img className={ styles.logo } src={ logo } alt="Logo de L'Art de Grandir" />
                    <p className={ styles.signature }>L'<span>A</span>RT DE <span>G</span>RANDIR, ensemble.</p>
                </div>
            </div>
        </div>
    )
}
