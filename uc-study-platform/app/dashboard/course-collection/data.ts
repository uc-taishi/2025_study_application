export type Unit = {
  id: number;
  title: string;
  summary: string;
  requirement: string;
  link: string;
};

export const courses = [
  {
    href: "python",
    title: "Python入門",
    units: [
      {
        id: 1,
        title: "イントロダクション",
        summary: "Pythonとは？Pythonのインストール方法について学習",
        requirement:
          "リンク先のチュートリアルの「1. やる気を高めよう」〜「3. 形式ばらないPythonの紹介」までを実施。",
        link: "https://docs.python.org/ja/3/tutorial/index.html",
      },
      {
        id: 2,
        title: "基本文法",
        summary: "変数・演算子・条件分岐・ループを学習",
        requirement: "演習問題を3問解く",
        link: "https://docs.python.org/ja/3/tutorial/introduction.html",
      },
    ],
  },
] as const;