alert("Test your knowledge! You have 10 minutes to label all 50 US states!");

let count = 59;
let min = 9;


let interval = setInterval(function(){
    count--;
    $('#count').html(count);
    if (count === 0 && min === 0){
        clearInterval(interval);
        alert("You're out of time!");
        results();
    };

    if (count === 0){
    count = 60;
    };
}, 1000);

let clock = setInterval(function(){
    min--;
    $('#minutes').html(min);
    if (min === 0){
        clearInterval(clock);
    };

}, 60300);

//stop timer once quiz is done

$('#submit').on('click', function(){
    clearInterval(interval);
    clearInterval(clock);
    $('#dialog').css('visibility', 'visible');
    results();
});

function results(){
    let question1 = $("input[name*='question1']").val();
        let correct = 0
        if (question1.toLowerCase()==='alaska'){
            correct++
        };
        
        let question2 =$("input[name*='question2']").val();
        if (question2.toLowerCase()==='washington'){
            correct++
        };

        let question3 = $("input[name*='question3']").val();
        if (question3.toLowerCase()==='montana'){
            correct++
        };

        let question4 = $("input[name*='question4']").val();
        if (question4.toLowerCase()==='north dakota'){
            correct++
        };

        let question5 = $("input[name*='question5']").val();
        if (question5.toLowerCase()==='minnesota'){
            correct++
        };
        let question6 = $("input[name*='question6']").val();
        if (question6.toLowerCase()==='wisconsin'){
            correct++
        };

        let question7 = $("input[name*='question7']").val();
        if (question7.toLowerCase()==='michigan'){
            correct++
        };

        let question8 = $("input[name*='question8']").val();
        if (question8.toLowerCase()==='new york'){
            correct++
        };

        let question9 = $("input[name*='question9']").val();
        if (question9.toLowerCase()==='vermont'){
            correct++
        };
        let question10 = $("input[name*='question10']").val();
        if (question10.toLowerCase()==='new hampshire'){
            correct++
        };

        let question11 = $("input[name*='question11']").val();
        if (question11.toLowerCase()==='maine'){
            correct++
        };

        let question12 = $("input[name*='question12']").val();
        if (question12.toLowerCase()==='oregon'){
            correct++
        };
        let question13 = $("input[name*='question13']").val();
        if (question13.toLowerCase()==='idaho'){
            correct++
        };

        let question14 = $("input[name*='question14']").val();
        if (question14.toLowerCase()==='wyoming'){
            correct++
        };

        let question15 = $("input[name*='question15']").val();
        if (question15.toLowerCase()==='south dakota'){
            correct++
        };

        let question16 = $("input[name*='question16']").val();
        if (question16.toLowerCase()==='iowa'){
            correct++
        };

        let question17 =$("input[name*='question17']").val();
        if (question17.toLowerCase()==='illinois'){
            correct++
        };

        let question18 = $("input[name*='question18']").val();
        if (question18.toLowerCase()==='indiana'){
            correct++
        };

        let question19 = $("input[name*='question19']").val();
        if (question19.toLowerCase()==='ohio'){
            correct++
        };

        let question20 = $("input[name*='question20']").val();
        if (question20.toLowerCase()==='pennsylvania'){
            correct++
        };
        let question21 = $("input[name*='question21']").val();
        if (question21.toLowerCase()==='new jersey'){
            correct++
        };

        let question22 =$("input[name*='question22']").val();
        if (question22.toLowerCase()==='connecticut'){
            correct++
        };

        let question23 = $("input[name*='question23']").val();
        if (question23.toLowerCase()==='rhode island'){
            correct++
        };

        let question24 = $("input[name*='question24']").val();
        if (question24.toLowerCase()==='massachusetts'){
            correct++
        };

        let question25 = $("input[name*='question25']").val();
        if (question25.toLowerCase()==='california'){
            correct++
        };

        let question26 = $("input[name*='question26']").val();
        if (question26.toLowerCase()==='nevada'){
            correct++
        };

        let question27 = $("input[name*='question27']").val();
        if (question27.toLowerCase()==='utah'){
            correct++
        };

        let question28 = $("input[name*='question28']").val();
        if (question28.toLowerCase()==='colorado'){
            correct++
        };

        let question29 = $("input[name*='question29']").val();
        if (question29.toLowerCase()==='nebraska'){
            correct++
        };
        let question30 = $("input[name*='question30']").val();
        if (question30.toLowerCase()==='kansas'){
            correct++
        };

        let question31 = $("input[name*='question31']").val();
        if (question31.toLowerCase()==='missouri'){
            correct++
        };

        let question32 =$("input[name*='question32']").val();
        if (question32.toLowerCase()==='kentucky'){
            correct++
        };

        let question33 = $("input[name*='question33']").val();
        if (question33.toLowerCase()==='west virginia'){
            correct++
        };

        let question34 = $("input[name*='question34']").val();
        if (question34.toLowerCase()==='virginia'){
            correct++
        };

        let question35 = $("input[name*='question35']").val();
        if (question35.toLowerCase()==='maryland'){
            correct++
        };

        let question36 = $("input[name*='question36']").val();
        if (question36.toLowerCase()==='delaware'){
            correct++
        };

        let question37 = $("input[name*='question37']").val();
        if (question37.toLowerCase()==='arizona'){
            correct++
        };

        let question38 = $("input[name*='question38']").val();
        if (question38.toLowerCase()==='new mexico'){
            correct++
        };

        let question39 = $("input[name*='question39']").val();
        if (question39.toLowerCase()==='oklahoma'){
            correct++
        };
        let question40 = $("input[name*='question40']").val();
        if (question40.toLowerCase()==='arkansas'){
            correct++
        };

        let question41 = $("input[name*='question41']").val();
        if (question41.toLowerCase()==='tennessee'){
            correct++
        };

        let question42 = $("input[name*='question42']").val();
        if (question42.toLowerCase()==='north carolina'){
            correct++
        };
        let question43 = $("input[name*='question43']").val();
        if (question43.toLowerCase()==='texas'){
            correct++
        };

        let question44 = $("input[name*='question44']").val();
        if (question44.toLowerCase()==='louisiana'){
            correct++
        };

        let question45 = $("input[name*='question45']").val();
        if (question45.toLowerCase()==='mississippi'){
            correct++
        };

        let question46 = $("input[name*='question46']").val();
        if (question46.toLowerCase()==='alabama'){
            correct++
        };

        let question47 = $("input[name*='question47']").val();
        if (question47.toLowerCase()==='georgia'){
            correct++
        };

        let question48 = $("input[name*='question48']").val();
        if (question48.toLowerCase()==='south carolina'){
            correct++
        };

        let question49 = $("input[name*='question49']").val();
        if (question49.toLowerCase()==='florida'){
            correct++
        };

        let question50 = $("input[name*='question50']").val();
        if (question50.toLowerCase()==='hawaii'){
            correct++
        };

        if(correct === 50 && count === 0 && min === 0){
            $('#dialog').html(`CONGRATULATIONS, you\'re a genius! You got all 50 states!!!! It took you a while, but you got there! Did you want to play again?`);
            $('.star').css('opacity', '1');
        };

        if (correct<50 && correct>=40 && count === 0 && min === 0){
            $('#dialog').html(`WOW, AMAZING JOB! You scored ${correct}/50 in ten minutes! Did you want to play again?`);
        };

        if (correct<40 && correct>=30 && count === 0 && min === 0){
            $('#dialog').html(`NOT BAD! You scored ${correct}/50 in ten minutes! Did you want to play again?`);
        };

        if (correct<30 && correct>=20 && count === 0 && min === 0){
            $('#dialog').html(`It could be worse! You scored ${correct}/50 in ten minutes! Did you want to play again?`);
        }

        if (correct<20 && count === 0 && min === 0){
            $('#dialog').html(`Geography isn't for everyone! You scored ${correct}/50 in ten mintes! Did you want to play again?`);
        };

        if(correct === 50 && count > 0 && min > 0){
            $('#dialog').html(`CONGRATULATIONS, you\'re a genius! You got all 50 states!!!! And it only took you ${9-min} minutes and ${60-count} second(s)! Did you want to play again?`);
            $('.star').css('opacity', '1');
        };

        if (correct<50 && correct>=40 && count > 0 && min > 0){
            $('#dialog').html(`WOW, AMAZING JOB! You scored ${correct}/50 in ${9-min} minutes and ${60-count} second(s)! Did you want to play again?`);
        };

        if (correct<40 && correct>=30 && count > 0 && min > 0){
            $('#dialog').html(`NOT BAD! You scored ${correct}/50 in ${9-min} minutes and ${60-count} second(s)! Did you want to play again?`);
        };

        if (correct<30 && correct>=20 && count > 0 && min > 0){
            $('#dialog').html(`It could be worse! You scored ${correct}/50 in ${9-min} minutes and ${60-count} second(s)! Did you want to play again?`);
        }

        if (correct<20 && count > 0 && min > 0){
            $('#dialog').html(`Geography isn't for everyone! You scored ${correct}/50 in ${9-min} minutes and ${60-count} second(s)! Did you want to play again?`);
        };

        $('#dialog').css('visibility', 'visible');
        $('.ui-dialog-buttons').css('opacity', 1);
        $( "#dialog" ).dialog();
    };

const funFacts = [
    {
        name: 'American Flag',
        info:'Robert G. Heft, a 17-year old high school student, designed the American flag, and he did it as a school project. He originally received a B– for the project, but he was later awarded an A after the flag was accepted by the Congress.'
    },
    {
        name: 'GPS',
        info: 'The GPS is controlled and owned by the American Government, which shows their power and influence over the world. The GPS is being used worldwide, and can be switched off by the US Government at any time.'
    },
    {
        name: 'Alaska',
        info:'The US purchased Alaska from Russia for just $7.2 million in 1867, making it out to be just 2 cents per acre.'
    },
    {
        name:'Monowi, Nebraska',
        info:'Monowi, Nebraska is the only town in America that currently has a population of 1. Elsie Eiler is the 83 year old resident of Monowi, and she is also the city’s mayor, librarian, and bartender. She pays taxes to herself and considers people 40 miles away to be her neighbors.'
    },
    {
        name:'Worst Drivers',
        info:'According to the Allstate\'s Best Drivers Report in 2017, Boston is home to the world\'s worst drivers. The report looks at the nation\'s 200 largest citites. The best drivers can be found in Kansas City.'
    }
];
    
let length = funFacts.length
let ranNumber = Math.floor(Math.random()*length)

$("#dialog").dialog({
    width: 500,
    dialogClass: "no-close",
    buttons: [
        {
            text: "Fun Fact!",
            click: function(){
                $(this).css('text-align', 'left');
                $(".ui-dialog-titlebar").html(`${funFacts[ranNumber].name}`);
                $(this).html(`${funFacts[ranNumber].info}<br>Did you want to play again?`);
            }
        },
        {   
            text: "OK",
            click: function() {
                $(this).dialog("close");
                location.reload(true);
            }
        }
    ]
});