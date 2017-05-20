const CommentsBanner = (props) => {
  const college = props.college;

  return (
      <div className = "card">
        <div className="row">
          <div className="col-md-3">
            <img className="img-responsive cardImages style_prevu_kit" src = {college.image_url}/>
          </div>
          <a className="college-name" href={'http://' + college.website_url}> {college.name}</a>
          <p className="description">{college.description}</p>
        </div>
      </div>
  );
};

export default CommentsBanner;
