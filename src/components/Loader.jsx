import LoaderGIF from "../assets/img/spinner.gif";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-inner">
        <img src={LoaderGIF} />
      </div>
    </div>
  );
};

export default Loader;
