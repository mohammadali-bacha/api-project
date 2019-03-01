export function authenticate(req,res,next){
    // console.log(req);
    res.redirect('/');
};

export const sqrt = Math.sqrt;

export function square(x) {
    console.log("square");
    
    return x * x;
};

export function diag(x, y) {
    return sqrt(square(x) + square(y));
};