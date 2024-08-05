const home = (req, res) => {
    res.end(
        JSON.stringify({
            code: 200,
            remark: 'success',
            data: null
        })
    )
}


export default { home };