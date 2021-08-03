function preload()
{

}

function setup()
{
    canvas = createCanvas(550 , 400);
    canvas.position(110 , 300);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = " ";
}

function draw()
{
    image(video , 0 , 0, 550 , 400);
    tint(tint_color);
}

function take_snapshot()
{
    save( 'Image.png' );
}

function add_tint()
{
    tint_color = document.getElementById("color_name").value;
}