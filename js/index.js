/**
 * Created by Administrator on 2016/3/11.
 */
$(function(){
    //横店春游大会20条文案
    var page_text=[
        "1、2016•4月16日，睁眼醒来，发现自己竟然在一条古色古香的大街上！原来我竟然穿越到了“广州街”！到处是小贩此起彼伏的吆喝声，呀，还有人在表演魔术！听路人说，这里正举办“横店春游大会”呢!",
        "2、2016•4月16日，我正在公园里散步，忽然听到前面有女子的笑声，走近一看，放风筝的女子竟然是琳琅！旁边那个穿龙袍的是康熙！问了宫女才知道，此乃“横店春游大会”!我竟然穿越到了“明清宫苑”！",
        "3、2016•4月2日，我眼前忽然白光一闪，发现自己竟然变成糖宝了！骨头告诉我，这里是“明清宫苑”，现在正值“横店春游大会”，是她把我召唤过来的！马上就可以在见到尊上了，想想还有点小激动呢！",
        "4、2016•4月2日，我路过一家名叫“哑舍”的古玩店，谁知刚踏入店门就晕了过去，等我醒来一看，我竟然穿越到了“秦王宫”！哎这么多帅哥皇子邀请我去“横店春游大会”，不去多不好意思呀！",
        "5、2016•4月2日，我简直走了狗屎运，赏个桃花也能穿越！“秦王宫”的桃林中，苏哥哥温柔地摘下落在我发上的桃花瓣。在我望过去时，淡淡一笑，“人面桃花相映红”。",
        "6、2016•4月16日，我正坐着船游湖，忽然船身一阵摇晃我掉进了水里。等我有意识时发现自己竟然穿越到了“秦王宫”！听说秦王宫后的桃花林已经盛开啦，不知道能不能遇到逍遥哥哥和灵儿呢？",
        "7、2016•4月10日，我遇到了一只很神奇的猫。它竟然把我带到了“清明上河图”，然后变成了一个风情万种的姑娘！喂说好的建国之后不许成精呢！猫妖咯咯一笑，“走吧！陪我一起去‘大宋花朝节’吧！”",
        "8、2016•4月16日，夜晚雷雨交加，我一不小心掉井盖里了。等我爬起来发现我竟然来到了“广州街”，这里正在举办“民国樱花节”！被风吹起的樱花瓣落在树下姑娘们的发上、衣上，美好的让我有些恍惚。",
        "9、2016•4月10日，我正晒着太阳，忽然听得有萧声传来，睁眼发现自己竟然身在“明清宫苑”！纳尼？我打了个盹竟然穿越了？吹箫的人告诉我，此乃“横店春游大会”，而我是那个被选中召唤来的孩子。",
        "10、2016•4月23日，天上飘来一张传单正盖在我脸上，等我扯下传单一看，我竟来到了“秦王宫”！宫女告诉我，这里正在举行“八大厨争霸赛”，我也可以免费品尝！哇这对吃货来说简直是天大的福利",
        "11、2016•5月20日，表白日。闻着玫瑰的芬芳，我醉在其中，等我清醒过来的时候赫然发现，自己正身在梦幻谷！空中，飘着几个大字：“520求婚大会”；远处，王斯葱手捧玫瑰，微笑着向我走来。",
        "12、2016•4月10日，我正在看书，身边突然蹦出一个白衣姐姐，她手一挥，带我来到了一个陌生的世界。“欢迎来到‘清明上河图’，你是被花神选中的孩子，想回去的话就要集齐99朵别人送给你的花哦。”",
        "13、2016•4月2日，我买了台“横店定制版”时空穿越机，据说我恰好是第1000位顾客，商店慷慨地赠送给我“横店春游大会”一日游服务。我看了活动海报好久，决定就是你了，秦王宫，我来啦！",
        "14、我抱着好奇心点开了一个名为“横店春游大会”的游戏，突然眼前一黑，听见一个声音道，“欢迎来到横店世界，现在是公元2016年4月2日，您可前往清明上河图参与花朝节活动，奖励丰厚哦！”",
        "15、2016•4月16日，我不知道点到什么奇怪的网页了眼前突然一黑，然后发现自己穿越到了一款名为“横店春游大会”游戏里！游戏NPC跟我搭话：“这里是广州街！你来的真巧，今天正好是樱花节！”",
        "16、2016•4月10日，我正抱着抱枕看《半月传》，忽然白光一闪，我竟然来到了“清明上河图”！温文尔雅的黄楔邀我一起去“大宋花朝节”！第一次过花朝节，好兴奋！",
        "17、2016•4月2日，清明时节，我竟然穿越到了“清明上河图”！还遇到了大文豪苏式！不过此时他正优雅地吃着清明粿，对我道；“今年的‘大宋花朝节’有好多美食，保证让你停不下来！”",
        "18、2016•4月10日，我在街上闲逛，走着走着竟然来到了“清明上河图”！韩云惜告诉我此乃“大宋马拉松狂欢节”，一路上还有尊上靖王等男神女神为你加油。看上去挺好玩的，我也要参加！",
        "19、2016•4月10日，我正抱着抱枕看《芈月传》，忽然白光一闪，我竟然来到了“秦王宫”！大秦太后芈月正举办“横店八大厨争霸赛”，我也有幸能吃到这天下第一宴，嘿嘿嘿，美味大餐等着我！",
        "20、2016•4月2日，我正在看袁梅写的《岁园食单》，突然闻到一阵勾人馋虫的香气，抬头一看，自己竟身在“明清宫苑”！“哎，你别睡了。”说话的竟是袁梅，“那边正举办美食节呢！作为吃货哪能错过！”"
    ];
    getText();
    function getText(){
        var random_num=Math.random()*20;
        var text_num=Math.floor(random_num);
        $(".page5_text .right p").html(page_text[text_num]);
    }

    //门打开
    $(".btn_opendoor").click(function(){
        $(".leftdoor").addClass("an_leftdoor");
        $(".rightdoor").addClass("an_rightdoor");
        $(this).animate({opacity:0},1500);
        $(".white_light").fadeIn(2000);
        setTimeout(function(){
            $(".page1").fadeOut(1000);
        },2500);
        setTimeout(function(){
            page2Fun();
            page2();
        },3500);
        setTimeout(function(){
           $(".btn_kscy").fadeIn(1000)
        },8500);
        //setTimeout(function(){
        //    $(".page2_text01").fadeOut(2000);
        //},5500);
        //setTimeout(function(){
        //    $(".page2_text02").show().addClass("fadeInRight")
        //},7500);

    });
    function page2Fun(){
        $(".page2_text02").hide();
        $(".page2_text01").show();
        setTimeout(function () {
            $(".page2_text01").hide();
            $(".page2_text02").show();
        }, 4000)
    }
    function page2(){

            setInterval(function () {
                page2Fun()
            }, 8000)

    }
    //开关音乐
   // $(".btn_music").addClass("rotate").find("audio").get(0).play();
    $(".btn_music").click(function () {
        if ($(this).hasClass('rotate')){
            $(this).find("audio").get(0).pause();
            $(this).removeClass("rotate");
            //$('#mc_play').attr('class','stop');
        }else{
            $(this).find("audio").get(0).play();
            $(this).addClass("rotate");
            //$('#mc_play').attr('class','on');
        }

    });
    //第二页面，开始穿越按钮
    $(".btn_kscy").click(function(){
        $(".page2").fadeOut(1000);
        $(".leave").remove();

    });
    //说明页面，返回按钮
    $(".btn_fhyx").click(function(){
        $(".page3").fadeOut(1500);
        $(".page2").fadeIn(1000);
    });
    //选中场景按钮
    //$(".btn_cyd").click(function(){
    //    $(".page4").fadeOut(1000);
    //});
    //重新生成海报
    $(".btn_cxsct").click(function(){
        $(".page4").fadeIn(1000);
    });
    $(".btn_explain").click(function(){
        $(".page3").fadeIn(1000);
    });
    //生成海报按钮
    $(".page4 .btn_qhg").click(function(){
        $(".page5_img").hide();
        getText();
        $(".page5_qhg_img").show();
        $(".page4").fadeOut(1000);
    });
    $(".page4 .btn_qmsht").click(function(){
        $(".page5_img").hide();
        getText();
        $(".page5_qmsht_img").show();
        $(".page4").fadeOut(1000);
    });
    $(".page4 .btn_mqgy").click(function(){
        $(".page5_img").hide();
        getText();
        $(".page5_mqgy_img").show();
        $(".page4").fadeOut(1000);
    });
    $(".page4 .btn_gzxgj").click(function(){
        $(".page5_img").hide();
        getText();
        $(".page5_gzxgj_img").show();
        $(".page4").fadeOut(1000);
    });$(".page4 .btn_mhg").click(function(){
        $(".page5_img").hide();
        getText();
        $(".page5_mhg_img").show();
        $(".page4").fadeOut(1000);
    });
    $(".btn_ljlq").click(function(){
        $(".success_box").show();
    });
    $(".btn_ok").click(function(){
        $(".success_box").hide();
    });
    //到抽奖按钮
    $(".page5_btn .left").click(function(){
        $(".page5").fadeOut(1000);
        $(".btn_music").removeClass("rotate").find("audio").get(0).pause();
        $(".btn_music").hide();
    })
    //
   // $(".page6").hide().css({opacity:1});
    $(".btn_close").click(function(){
        $(".page5").fadeIn(1000);
        $(".btn_music").show();
    })

});