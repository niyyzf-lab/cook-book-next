const url = "https://api.bilibili.com/x/web-interface/view";

//创建格式化接口
export interface Video {
  code: number;
  message: string;
  ttl: number;
  data: {
    bvid: string;
    aid: number;
    videos: number;
    tid: number;
    tname: string;
    copyright: number;
    pic: string;
    title: string;
    pubdate: number;
    ctime: number;
    desc: string;
    desc_v2: [[Object]];
    state: number;
    duration: number;
    rights: {
      bp: number;
      elec: number;
      download: number;
      movie: number;
      pay: number;
      hd5: number;
      no_reprint: number;
      autoplay: number;
      ugc_pay: number;
      is_cooperation: number;
      ugc_pay_preview: number;
      no_background: number;
      clean_mode: number;
      is_stein_gate: number;
      is_360: number;
      no_share: number;
      arc_pay: number;
      free_watch: number;
    };
    owner: {
      mid: number;
      name: string;
      face: string;
    };
    stat: {
      aid: number;
      view: number;
      danmaku: number;
      reply: number;
      favorite: number;
      coin: number;
      share: number;
      now_rank: number;
      his_rank: number;
      like: number;
      dislike: number;
      evaluation: "";
      argue_msg: "";
      vt: number;
    };
    dynamic: string;
    cid: 224718054;
    dimension: { width: 1920; height: 1080; rotate: 0 };
    premiere: null;
    teenage_mode: 0;
    is_chargeable_season: false;
    is_story: false;
    is_upower_exclusive: false;
    is_upower_play: false;
    enable_vt: 0;
    vt_display: "";
    no_cache: false;
    pages: [[Object]];
    subtitle: { allow_submit: false; list: [] };
    is_season_display: false;
    user_garb: { url_image_ani_cut: "" };
    honor_reply: {};
    like_icon: "";
    need_jump_bv: false;
    disable_show_up_info: false;
  };
}
// 发送GET请求
export async function getVideoData(bv: string[]) {
  //循环
  let VideoData: Video[] = [];
  for (let i = 0; i < bv.length; i++) {
    const params = new URLSearchParams({
      bvid: bv[i],
    });
    console.log(params);
    const url =
      "https://api.bilibili.com/x/web-interface/view?" + params.toString();
    console.log(url);
    const res = await fetch(url);
    const data: Video = await res.json();
    VideoData.push(data);
    //添加延迟
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, 1000);
    });
  }
  //添加url参数

  return VideoData;
}
