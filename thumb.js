const path = require("path");
const os = require("os");

const fileUrl = require('file-url');
const crypto = require('crypto');
const fs = require('fs-extra');

class ThumbnailSupplier {

    static get filetype() {
        return "png";
    }

    static hashFile(file) {
      let fileArr=file.split("/");
      let temArr=fileArr[fileArr.length-1];
        return temArr;
    }

    static getThumbnailFileName(file) {
        return `${ThumbnailSupplier.hashFile(file)}.${ThumbnailSupplier.filetype}`;
    }

    constructor(options) {
        this.size = options.size;
        this.cacheDir = options.cacheDir || path.join(os.homedir(), ".cache", "thumbsupply", this.size.name);
        fs.ensureDirSync(this.cacheDir);
    }

    createThumbnail(file) {
        throw new ReferenceError('Method not implemented');
    }

    getThumbnailLocation(file) {
        return path.join(this.cacheDir, ThumbnailSupplier.getThumbnailFileName(file));
    }
}

module.exports = ThumbnailSupplier;
