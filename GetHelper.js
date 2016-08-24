/**
 * Created by user on 24.08.2016.
 */
class GetHelper{
    public static getProjects(response) {
    var jsonob = JSON.parse(response.getData());
    var jsonar = JSON.projects;
    return jsonar;
}
    public static getImages(response) {
    var jsonob = JSON.parse(response.getData());
    var jsonar = JSON.images;
    return jsonar;
}
    public static getComments(response) {
        var jsonob = JSON.parse(response.getData());
        var jsonar = JSON.comments;
        return jsonar;
    }
}