
window.onload=function(){
    //��ȡСԲ��
    var ol=document.getElementById("olLis");
    var olLis=ol.children;
    //��ȡul
    var ul=document.getElementById("ulLis");
    //��ȡͼƬ���
    var picWidth=document.getElementById("pic").offsetWidth;
    //��ȡ�����
    var box=document.getElementById("box");
    //��ȡ�Ҽ�ͷ
    var next=document.getElementById("next");
    //��ȡ���ͷ
    var prev=document.getElementById("prev");

    //��СԲ������
    for(var i=0;i<olLis.length;i++){
        olLis[i].index=i;
        olLis[i].onmouseover=function(){
            for(var j=0;j<olLis.length;j++){
                olLis[j].className="";
            }
            this.className="now";
            animate(ul,-this.index*picWidth);
            pic=this.index;
            olIndex=this.index;
        }

    }
     olLis[0].className="now";
    //�Զ��ֲ�
    var timer=null;

    timer=setInterval(autoPlay,2500);
    var pic=0;
    var olIndex=0;
    function autoPlay(){

        if(pic<olLis.length-1){
            pic++;
        }else{
            pic=0;
            ul.style.left=0+"px";
        }
        animate(ul,-pic*picWidth);
        if(olIndex<olLis.length-1){
            olIndex++;
        }else{
            olIndex=0;
        }
        for(var k=0;k<olLis.length;k++){
            olLis[k].className="";
        }
        olLis[olIndex].className="now";
    }
    //�������ֹͣ
    box.onmouseover=function(){
        clearInterval(timer);
    }
    //����뿪�����ֲ�
    box.onmouseout=function(){
        timer=setInterval(autoPlay,2500);
    }

   //����Ҽ�ͷ
    next.onclick=function(){

        if(pic<olLis.length-1){
            pic++;
        }
        animate(ul,-pic*picWidth);
        olIndex=pic;
        for(var k=0;k<olLis.length;k++){
            olLis[k].className="";
        }
        olLis[olIndex].className="now";
    }
    //������ͷ
    prev.onclick=function(){
        if(pic>0){
            pic--;
        }
        animate(ul,-pic*picWidth);
        olIndex=pic;
        for(var k=0;k<olLis.length;k++){
            olLis[k].className="";
        }
        olLis[olIndex].className="now";
    }
//���庯��
    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var step = 20;
            step = obj.offsetLeft < target ? step : -step;
            if (Math.abs(obj.offsetLeft - target) > Math.abs(step)) {
                obj.style.left = obj.offsetLeft + step + "px";
            } else {
                obj.style.left = target + "px";
                clearInterval(obj.timer);
            }
        }, 5)
    }
    //jq
    $(".uli_1").mouseover(function(){
        $(this).css("borderBottom","2px solid #d01");
        $(this).children("a").css("backgroundColor","#d01");
        $(this).children("a").css("color","#fff");
        $(".nav").css("display","block");
    })
    $(".uli_1").mouseout(function(){
        $(this).css("border","");
        $(this).children("a").css("backgroundColor","#eee");
        $(this).children("a").css("color","#323232");
        $(".nav").mouseover(function(){
        $(this).css("display","block")
        })
        $(".nav").css("display","none")
    })
    $(".nav").mouseout(function(){     //�뿪.nav����
        $(this).css("display","none")
    })
//�������
    $(".nav1_1").mouseover(function(){
        $(this).css("backgroundColor","#e5e5e5");
    })
    $(".nav1_1").mouseout(function(){
        $(this).css("backgroundColor","");
    })

//��ʼ  ����"���˼����ò�Ʒ"����"navT"
    $(".uli_2").mouseover(function(){
        $(this).css("borderBottom","2px solid #d01");
        $(this).children("a").css("color","#d01");
        $(".navT").slideDown(400)
    })
    $(".uli_2").mouseout(function(){
        $(this).css("border","");
        $(this).children("a").css("color","");
        $(".navT").mouseover(function(){
            $(this).css("display","block");
        })
        $(".navT").css("display","none");
    })
    $(".navT").mouseout(function(){     //�뿪.navT����
        $(this).css("display","none")
    })
//����  ����"���˼����ò�Ʒ"����"navS"

    //��ʼ  ����"���ý������"����"navT"
    $(".uli_3").mouseover(function(){
        $(this).css("borderBottom","2px solid #d01");
        $(this).children("a").css("color","#d01");
        $(".navS").slideDown(400)
    })
    $(".uli_3").mouseout(function(){
        $(this).css("border","");
        $(this).children("a").css("color","");
        $(".navS").mouseover(function(){
            $(this).css("display","block");
        })
        $(".navS").css("display","none");
    })
    $(".navS").mouseout(function(){     //�뿪.navS����
        $(this).css("display","none")
    })

//����  ����"���ý������"����"navS"
//��ʼ  ����"����֧��"����"navF"
    $(".navF1_1").mouseover(function () {
        $(this).css("backgroundColor", "")
        $(this).css("backgroundColor", "#e5e5e5").siblings(".navF1_1").css("backgroundColor", "")
    })
    $(".navF1_1").mouseout(function () {
        $(this).css("backgroundColor", "")
    })
    $(".uli_4").mouseover(function(){
        $(this).css("borderBottom","2px solid #d01");
        $(this).children("a").css("color","#d01");
        $(".navF").slideDown(400);
    })
    $(".uli_4").mouseout(function(){
        $(this).css("border","");
        $(this).children("a").css("color","");
        $(".navF").mouseover(function(){
            $(this).css("display","block");
        })
        $(".navF").css("display","none");
    })
    $(".navF").mouseout(function(){     //�뿪.navS����
        $(this).css("display","none")
    })

//����  ����"����֧��"����"navF"
//��ʼ  ����"�������"����"navG"
    $(".navG_1_1").mouseover(function () {
        $(this).css("backgroundColor", "")
        $(this).css("backgroundColor", "#e5e5e5").siblings(".navF1_1").css("backgroundColor", "")
    })
    $(".navG_1_1").mouseout(function () {
        $(this).css("backgroundColor", "")
    })
    $(".uli_5").mouseover(function(){
        $(this).css("borderBottom","2px solid #d01");
        $(this).children("a").css("color","#d01");
        $(".navG").stop(true,false).slideDown(400);
    })
    $(".uli_5").mouseout(function(){
        $(this).css("border","");
        $(this).children("a").css("color","");
        $(".navG").mouseover(function(){
            $(this).css("display","block");
        })
        $(".navG").css("display","none");
    })
    $(".navG").mouseout(function(){     //�뿪.navS����
        $(this).css("display","none")
    })

//����  ����"�������"����"navF"
//��ʼ  ����"������"
    $(".uli_6").mouseover(function(){
        $(this).css("borderBottom","2px solid #d01");
        $(this).children("a").css("color","#d01");
    })
    $(".uli_6").mouseout(function(){
        $(this).css("borderBottom","");
        $(this).children("a").css("color","");
    })
//����  ����"������"
//��ʼ  ����"��Ϊ�̳�"
    $(".uli_7").mouseover(function(){
        $(this).css("borderBottom","2px solid #d01");
        $(this).children("a").css("color","#d01");
    })
    $(".uli_7").mouseout(function(){
        $(this).css("borderBottom","");
        $(this).children("a").css("color","");
    })
//����  ����"��Ϊ�̳�"
//headerB�������̶� ��ʼ
    var $headTop=$("#header .headerT").height();
    $(window).scroll(function(){
        var scrollTop=$(document).scrollTop();
        //console.log(scrollTop)
        if(scrollTop>$headTop){
            $("#header .headerB").css({
                "position": "fixed",
                "top": 0,
                "z-index":999,
                "backgroundColor":"#fff"
            })
            $("#box").css("margin-top","40px")
        }else{
            $("#header .headerB").css({
                "position": "rel" +
                "ative",
                "top": 0,
            })
            $("#box").css("margin-top","0px")
        }
    })
//headerB�������̶� ����

//�ض���һ��
//����ض���
    $(document).ready(function(){
        $(window).scroll(function(){
           var h1=$(document).scrollTop();
            if(h1>600){
              $(".rock1").css("opacity","0.8");
            }else{
                $(".rock1").css("opacity","0");
            }
        })
       $(".rock1").click(function(){
           $("body,html").animate({
               scrollTop:0
           },500)
       })
    })
    //
    $(".rockL").mouseover(function () {
        $(this).css("backgroundColor", "#cb3034").siblings(".rockL").css("backgroundColor", "#c3c3c3")
    })
    $(".rockL").mouseout(function () {
        $(this).css("backgroundColor", "#c3c3c3")
    })

//ҳ���ϵ���
    $(window).scroll(function () {
        var h = $(this).scrollTop();
        //console.log(h)
        if (h > 2000) {
            $("#footerF").css("display", "block").animate({"width": "1349px"},1500)
            //$("#footerF").slideDown(1000)
        }
    })
    //�����������������
    //$(".ul_2 a").click(function () {
    //    $(".search").slideToggle(500);
    //    $(".search input").css("boxShadow", "0px 0px 8px rgba(102,175,233,.7)")
    //})
    $(".ul_2 a").bind({
        click: function () {
            $(".search").slideToggle(500);
            $(".search input").css("boxShadow", "0px 0px 8px rgba(102,175,233,.7)")
        }
    })





    //����mainT�¼� ��ʼ
    $(".mohu,.mohu2").hover(
        function () {
            $(this).children(".mainT_D").css({"backgroundColor": "rgba(0, 0, 0, 0.5)", "transition": "all .5s"});
            $(this).find("imgd").css({"left": "-15px", "transition": "all .5s"});
        },
        function () {
            $(this).children(".mainT_D").css({"backgroundColor": "rgba(0, 0, 0, 0)", "transition": "all .5s"});
            $(this).find("imgd").css({"left": "0", "transition": "all .5s"});
        }
    )
    $(".mainT_1").hover(
        function () {
            $(this).children("h3").css({"bottom": "70px", "transition": "all .5s"});
        },
        function () {
            $(this).children("h3").css({"bottom": "50px", "transition": "all .5s"});
        }
    )
    $(".mainT_2").hover(function () {
            $(this).children("h3").css({"bottom": "148px", "transition": "all .5s"});
            $(this).children("p").css({"bottom": "30px", "transition": "all .5s", opacity: "1"});
        },
        function () {
            $(this).children("h3").css({"bottom": "104px", "transition": "all .5s"});
            $(this).children("p").css({"bottom": "-40px", "transition": "all .5s", opacity: "0"});
        }
    )
    $(".mainT_3").hover(function () {
            $(this).children("h3").css({"bottom": "100px", "transition": "all .5s"});
            $(this).children("p").css({"bottom": "40px", "transition": "all .5s", opacity: "1"});
        },
        function () {
            $(this).children("h3").css({"bottom": "84px", "transition": "all .5s"});
            $(this).children("p").css({"bottom": "5px", "transition": "all .5s", opacity: "0"});
        }
    )
    //����mainT�¼� ����

    //����mainC�¼� ��ʼ
    $(".mainC_1").hover(function () {
            $(this).children("h3").css({"bottom": "130px", "transition": "all .5s"});
            $(this).children("p").css({"bottom": "20px", "transition": "all .5s", opacity: "1"});
        },
        function () {
            $(this).children("h3").css({"bottom": "104px", "transition": "all .5s"});
            $(this).children("p").css({"bottom": "-40px", "transition": "all .5s", opacity: "0"});
        }
    )
    $(".mainC_2").hover(function () {
            $(this).children("h3").css({"bottom": "130px", "transition": "all .5s"});
            $(this).children("p").css({"bottom": "40px", "transition": "all .5s", opacity: "1"});
        },
        function () {
            $(this).children("h3").css({"bottom": "104px", "transition": "all .5s"});
            $(this).children("p").css({"bottom": "-20px", "transition": "all .5s", opacity: "0"});
        }
    )
    // ����mainC�¼� ����













}