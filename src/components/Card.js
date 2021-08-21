import React, { useState, useEffect } from "react";

const Card = ({
    img,
    name,
    plrName,
    pts,
    index,
    copIndex,
    crookIndex,
    _vote,
    _scores,
}) => {
    const [show, setShow] = useState(false);
    const [_pts, set_pts] = useState(0);
    const [scores, setScores] = _scores;

    useEffect(() => {
        if (!show && !_vote) set_pts(scores[index]);
    }, [show, _vote, scores, index]);

    useEffect(() => {
        if (_vote && name !== "Crook") {
            scores[index] += pts;
            setScores(scores);
        }
    }, [_vote, name, scores, index, pts, setScores]);

    return (
        <div
            className="card"
            onClick={() => {
                if (_vote) {
                    if (name === "Crook") {
                        scores[copIndex] += 50;
                        setScores(scores);
                    } else {
                        scores[crookIndex] += 50;
                        setScores(scores);
                    }
                }
                setShow(!show);
            }}
        >
            <img
                src={
                    show
                        ? img
                        : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAADm5ubu7u4LCwtsbGxLS0v4+Pg9PT2NjY3R0dGioqL8/PwQEBDd3d2rq6sjIyMVFRWDg4Ps7Oy0tLTKysotLS14eHja2tpDQ0O9vb3Q0NCdnZ2mpqaWlpY3NzcbGxtVVVV6enpmZmaHh4cyMjJdXV1OTk7CwsK1UfHwAAAFiElEQVR4nO2Ye3eiPBDGuWksBsUKilhvbdf6/T/hC8kkJBAU6e6e7Xue3x8egkMyT24ziecBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwb8CW85p99cg9lpeLB/alMM/43/Dt97D2BR/1c3yunj7v2++E+S/2N3z7PYSRcHlSP0qxy7v2U2Ez+5kKM6lwd3cG/miFc6kw/f8q3EuF27v2P1qhN6mfovu76c9W6M0v0+2DcPHDFdYx8QH/tELhfRDn+cLwr6WwTVjkeRF6jXRboatDrHeLuDAaY1RsfcaqRuJ1/f7bicR+m8jdZLpU7ZrxMFlV+G+Ne58baf7rGKh3rTF88Vfio9Bo5a1+l+yq77cy/JTyfXmRRTvgssOO9vDPR/nUA7hXUFWSg+xJQ2Eg/3gh83Bimr+zrkJeiVGVGbyIVxvvqD/+qgZn3bS+CWgUq9+D2ciH2VHPs/RtruyeQi+ObPN00VGoq3yzGpIKT0fj46kXrMzK1JRgV7uRVTFaHrc7S3BhvF9h3DGXbjUKuXfzrT6xFdocrPnjn4RPnE/bdsn4merwWCTZPQrDtGu+sxWqDMF/bzXlUtgmE5bvjkZG79IbVcOxXL6eqRD0Knwli/Qzy15mhluNwgW97WzDWmE0+dwaPXXeNsUvs9e/skWQb6kwHymQsmr/KJa4mv6vfQrpkZY+pyU1MxXSh/6105ZSeK0DAFOe+9u6Lkbb16ouXKhBue3QlEhHDuJMS5LQkLoVcuXkVMUncrPQCjn7JV/tum3RxxvpKp9ZhizVVdEkmKjwSPvWbZRAOuf6XNVGYxq6x5Cf5GOsvidnSqVwx2iPcCU3pHBpFykoqrUX67OMDrXeyh6Fpyi180QYpRVV7U6F1CEnbc4u58o8yvQY0jQ/uabUix4lAQ2N2iTftMKLeLg0eYxc/LNRCt96J4BTYd7uEAX3rP39FHQr1AqVJKkwUqZzpZAmSjrdTWuqX1o6o1I3WkfrgQqp2zNHTZZCl8Fgha6ANF4hTSrHnHIqJC/KrrmtcOPossEKg6RH4ajN9A8plFd0YxW20sLvKaQo5EhsvzVL6/jcnVMDFa5l3hElkc04hRSy9wMVUsJ5vKNQ5ZmOVHmgQiY3ls610LhDYtZ2mb/WvK/dCunpqzGfC/u9Vrj0aJ9IRo8hVdXNiUZBEXujX+TKC3fET20nVYBc6ojPdVraXYpDFZJdE3HCrKxwTLQhkMt07OVq6+nLSynx1gkVxdO9mXmrw+Gh3dZQhdTLr3opy91CRnwexM6NuheqV22P5PG1Ly8tyJySYlqXdVJsnJ7UHUB7KQ5VqJLjg2Uo84zg6rsyjjsw8saf3OI4u1Ah7z09fZDFVxYXNyWl/sdQqJLvduo2WKGaBR/5Ogxy1Ur9HZMbmX138IDS73LxehUuHOZiGzfP+Op819oOByv09MF/lepLDnGepkmzeSJwcH2mbRCNuhVyfaA0yD2vdU+jbkbs27PhCsNuI7JmWkWJM+/tpS1xJVzovYnqSJRL2L5NNGfW8wq5F5xbjcxkUkIz7tnTcGZVRzd31I2O28RiZjVN+4mtkKK2vRSdCv2Wwr1shFlXlnpvYSerOBh2UBlJOlGH2zCNkiQRsz+IxGOTFpRX6pPzVaeoV7+2mSpFRSKwQsaxNon0rVkmimelcCmKzeG6eFdXSKfm3tlb1Et01Fk42JfL7GbctPN1UFNfLHqBfDTMw/hWmdeRiWIWD4VNqDOZddB8TyZMvNHRjEsLZcCo2HzAijxbZrl9j8jj/JtX4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADzLf2h7QfV1sn+IAAAAAElFTkSuQmCC"
                }
                alt="Card"
                width="136"
                height="100"
            />
            <div className="container">
                <h4>
                    <b>{show ? name : plrName}</b>
                </h4>
                <p>{!_vote ? _pts : ""}</p>
            </div>
        </div>
    );
};

export default Card;
