import { GlassCardStyled } from "./styles";
import { IGlassCard } from "./types";


export const GlassCard = ({ children, className }: IGlassCard) => {
    return <GlassCardStyled className={className}>{children}</GlassCardStyled>;
};
