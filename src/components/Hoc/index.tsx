import { Typography } from "@mui/material";
import { ComponentType, Suspense } from "react";

const HighOrderComponent = (WrappedComponent: ComponentType<any>) => (props: any) => {
    return (
        <Suspense 
            fallback={
                <Typography
                    variant="h3"
                    sx={{
                        marginTop: 25,
                        textAlign: 'center'
                    }}
                >
                    This is Loading...
                </Typography>
            }>
            <WrappedComponent {...props} breeds={[]} />
        </Suspense>
    )
}

export default HighOrderComponent