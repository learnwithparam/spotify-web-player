import { Link } from "react-router-dom";
import TextBoldL from '../text/text-bold-l';
import * as Icons from '../icons';

import styles from "./playlist-card-s.module.css";

function PlaylistCardS({path, imgUrl, title, hoverColor, isPlaying, setIsPlaying}){

    function changeTheme(){
        document.documentElement.style.setProperty('--hover-home-bg', hoverColor);
    }

    return (
        <Link to={`/playlist/${path}`} onMouseOver={changeTheme}>
            <div className={styles.PlaylistCardS}>
                <div className={styles.ImgBox}>
                    <img src={imgUrl} alt={`${title}`} />
                </div>
                <div className={styles.Title}>
                    <TextBoldL>{title}</TextBoldL>
                    <div className={styles.IconBox}>
                        <button onClick={() => setIsPlaying(!isPlaying)}>
                            <Icons.Play />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default PlaylistCardS;