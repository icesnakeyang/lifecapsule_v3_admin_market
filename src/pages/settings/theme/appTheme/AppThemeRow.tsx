import {Card} from "antd";
import {useNavigate} from "react-router-dom";

const AppThemeRow = (data: any) => {
    const {item} = data
    const navigate = useNavigate()
    return (<Card
        title={item.themeName}
        style={{margin: 20}}
        extra={
            <a
                style={{color: "#333"}}
                onClick={() =>
                    navigate("/main/AppThemeEdit", {state: {themeId: item.themeId}})
                }
            >
                Edit
            </a>
        }
    >
        <div>
            <div style={{background: item.background, padding: 20}}>
                <div
                    style={{
                        background: item.blockDark,
                        padding: 10,
                        color: item.textLight,
                    }}
                >
                    blockDark
                </div>
                <div>
                    <div style={{background: item.blockLight, color: item.textDark}}>
                        textLight
                    </div>
                </div>
                <div style={{color: item.textDark}}>textDark</div>
                <div style={{color: item.textHolder}}>textHolder</div>
                <div style={{color: item.colorDanger}}>colorDanger</div>
            </div>
        </div>
        <div style={{background: item.background, color: item.textLight}}>
            {item.themeName}
        </div>
    </Card>)
}
export default AppThemeRow;
