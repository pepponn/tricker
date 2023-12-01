import Svg, { Path, Rect } from "react-native-svg";
import {IconProps} from "../../../utils/types";

const CustomHeaderIcon = ({ size=24, color="white"}: IconProps) => {

    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Rect width="24" height="24" rx="2" fill={color}/>
            <Path d="M12.0361 7.69739L16.4325 5.73242M12.0361 7.69739V12.9825M12.0361 7.69739L17.0507 8.98479M16.4325 5.73242L19.3863 8.98479M16.4325 5.73242L17.0507 8.98479M19.3863 8.98479L18.8368 12.9825M19.3863 8.98479H17.0507M18.8368 12.9825L16.2264 15.7605M18.8368 12.9825L17.0507 8.98479M16.2264 15.7605L12.0361 18.2676V12.9825M16.2264 15.7605L17.0507 8.98479M16.2264 15.7605L12.0361 12.9825M17.0507 8.98479L12.0361 12.9825M11.9674 7.69739L7.57102 5.73242M11.9674 7.69739V12.9825M11.9674 7.69739L6.95277 8.98479M7.57102 5.73242L4.61719 8.98479M7.57102 5.73242L6.95277 8.98479M4.61719 8.98479L5.16674 12.9825M4.61719 8.98479H6.95277M5.16674 12.9825L7.7771 15.7605M5.16674 12.9825L6.95277 8.98479M7.7771 15.7605L11.9674 18.2676V12.9825M7.7771 15.7605L6.95277 8.98479M7.7771 15.7605L11.9674 12.9825M6.95277 8.98479L11.9674 12.9825" stroke="#9357F7" stroke-width="0.622382" stroke-linejoin="round"/>
        </Svg>

    )

}

export default CustomHeaderIcon;