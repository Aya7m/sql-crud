import connection from "../../db/connectiondb.js"

// add
export const addPost = (req, res) => {

    const { title, description, price } = req.body
    const query = `insert into posts(title,description,price) values("${title}","${description}","${price}")`
    connection.execute(query, (err, data) => {
        if (err) {
            return res.status(400).json({ message: 'query error' });
        }
        if (!data.affectedRows) {
            return res.status(400).json({ message: 'fail to add' });
        }

        return res.status(201).json({ message: 'success' });

    })
}


// get


export const getPost = (req, res) => {


    const query = `select * from posts`
    connection.execute(query, (err, data) => {
        if (err) {
            return res.status(400).json({ message: 'query error', err });
        }


        return res.status(201).json({ message: 'success', data });

    })
}


// update

export const updatePost = (req, res) => {

    const { title, description, price,id } = req.body
    const query = `update posts  set  title="${title}",description="${description}",price="${price}" where id="${id}"`
    connection.execute(query, (err, data) => {
        if (err) {
            return res.status(400).json({ message: 'query error' });
        }
        if (!data.affectedRows) {
            return res.status(400).json({ message: 'fail to update' });
        }

        return res.status(201).json({ message: 'success' });

    })
}


// delet


export const deletePost = (req, res) => {

    const { title, description, price,id } = req.body
    const query = `delete  from posts  where id="${id}"`
    connection.execute(query, (err, data) => {
        if (err) {
            return res.status(400).json({ message: 'query error' });
        }
        if (!data.affectedRows) {
            return res.status(400).json({ message: 'fail to delete' });
        }

        return res.status(201).json({ message: 'success' });

    })
}