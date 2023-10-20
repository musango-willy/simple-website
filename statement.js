    //switch statement

    const mayJavaScriptScoreTest=37;
    switch(true){
        case(mayJavaScriptScoreTest>=30 && mayJavaScriptScoreTest<=40):
        console.log("May is a E student")
        break;

        case(mayJavaScriptScoreTest>=41 && mayJavaScriptScoreTest<=50):
        console.log("May is a D student")
        break;

        case(mayJavaScriptScoreTest>=51 && mayJavaScriptScoreTest<=60):
        console.log("May is a C student")
        break;

        case(mayJavaScriptScoreTest>=61 && mayJavaScriptScoreTest<=70):
        console.log("May is a B student")
        break;

        case(mayJavaScriptScoreTest>=71):
        console.log("May is a A student")
        break;

        default:
            console.log("no score")
    }