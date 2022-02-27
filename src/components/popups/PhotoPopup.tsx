import hodge from '../../art/hodge.jpg';
import logo_1 from '../../art/logo_1.jpg';
import neg_trees from '../../art/neg_trees.jpg';
import pool from '../../art/pool.jpg';
import trees from '../../art/trees.jpg';
import crane from '../../art/crane.jpeg';
import h_and_j from '../../art/h_and_j.jpg';
import i_hate_this from '../../art/i_hate_this.jpg';
import blue_rust from '../../art/blue_rust.jpg';
import red from '../../art/red.jpg';
import shake_full from '../../art/shake_full.jpg';

export function PhotoPopup() {
    const photos = [
        blue_rust,
        hodge,
        h_and_j,
        logo_1,
        neg_trees,
        pool,
        i_hate_this,
        crane,
        trees,
        red,
        shake_full
    ]

    const photoContent = photos.map((filepath: string) => {
        return (
            <div className="photo-content" key={filepath}>
                <img src={filepath} alt={filepath} className="photo-element" />
            </div>
        )
    })

    return (
        <div className="popup-content">
            <div className={"popup-photo photo"}>
                {photoContent}
            </div>
        </div>
    )
}