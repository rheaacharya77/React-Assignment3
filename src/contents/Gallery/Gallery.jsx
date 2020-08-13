import React from 'react';
import './Gallery.css';


class Gallery extends React.Component{

    
        constructor(props) {
            super(props);
        
            this.state = {
              item: [],
            };
          }

          componentDidMount() {
            fetch("https://picsum.photos/v2/list?page=2&limit=5")
              .then((response) => {
                console.log({ response });
                return response.json();
              })
              .then((data) => {
                console.log({ data });
                this.setState({ item: data });
              });
          }
        
          render() {
            return (
              <div className="gallery">    
                <h1>Gallery</h1>
                {this.state.item.map((value) => (
                    <div className="card">
                        <div className="card-content">
                           <img className="card-picture"
                           src={value.download_url}
                            width={value.width/10} />
                          
                          
                        </div>
                    </div>
                ))
                }
              </div>
            );
          }
        }

export default Gallery;


