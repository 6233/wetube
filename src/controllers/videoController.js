import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", {pageTitle: "Home", videos});
}
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", {pageTitle: `Wahtching`});
}
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", {pagetitle: `Editing`});
}
export const postEdit = (req,res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
}

export const getUpload = (req, res) => {
  return res.render("upload", {pageTitle : `Upload Video`});
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  // const video = new Video({
  //   title,
  //   description,
  //   hashtags: hashtags.split(",").map((word) => `#${word}`),
  //   meta: {
  //     views: 0,
  //     rating: 0
  //   }
  // });
  try {
    await Video.create({
      title,
      description,
      hashtags: hashtags.split(",").map((word) => `#${word}`),
      meta: {
        views: 0,
        rating: 0,
      },
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message
    });
  }
};