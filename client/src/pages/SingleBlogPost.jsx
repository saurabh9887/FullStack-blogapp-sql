import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const SingleBlogPost = () => {
  return (
    <div className="singlePage">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />

        <div className="user">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p style={{ margin: "0px" }}>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/add-update-blog?edit=2`}>
              <img src="../../public/images/edit.png" alt="" />
            </Link>
            <img src="../../public/images/delete.png" alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ipsam
          tempore eum cupiditate, quaerat eligendi.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          laboriosam, veritatis eaque reprehenderit, vero rerum pariatur nisi
          enim obcaecati natus odio quibusdam esse facere earum dolore nam
          deserunt soluta tempore necessitatibus itaque. Est, minus. Facere
          atque, rem explicabo perferendis quibusdam quo provident assumenda
          fuga repudiandae dolorem voluptates similique totam dolore minima,
          ipsam ut quae voluptatem aspernatur obcaecati? Tenetur, at iste odit
          iure deserunt rem minima velit amet non tempore sint! Quia, eaque
          repudiandae. Necessitatibus omnis nulla impedit nisi vitae voluptatem
          nobis a obcaecati id facilis sit ipsum molestias iure voluptatum
          repudiandae eum, cumque fugiat! Maiores eius repellat omnis ea in
          quidem excepturi debitis quisquam eaque adipisci? Similique dolorum,
          mollitia laudantium quam error, ab, earum vel quaerat culpa expedita
          alias incidunt perspiciatis repellat? Enim animi eos tempore officiis
          cum atque quisquam cupiditate aut ducimus excepturi ipsum repudiandae
          doloremque, ad dignissimos aspernatur minus nemo impedit iste at. Quia
          adipisci sint assumenda accusantium expedita dolorem, placeat,
          debitis, ad totam deserunt architecto fuga? Dolorem, doloribus. Facere
          temporibus dolorum, voluptatem cumque et necessitatibus adipisci harum
          repudiandae, eligendi quia alias, tempore laudantium natus animi
          assumenda mollitia saepe. Harum perferendis autem perspiciatis eos
          adipisci deserunt inventore debitis officia ullam numquam deleniti
          veniam suscipit incidunt, quae atque iste et odit rem ipsam! Officia
          nihil architecto adipisci voluptatum consectetur quae suscipit tenetur
          accusantium debitis id in provident, ea eos iste excepturi eligendi
          laboriosam. Dolor, rerum? Consequatur unde iusto rerum ipsum eaque at,
          cum eligendi molestiae id, facere fugiat ut facilis inventore
          repellendus, voluptate cumque dolor suscipit repellat numquam nemo.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default SingleBlogPost;
