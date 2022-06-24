"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_comment_model_1 = __importDefault(require("../models/post.comment.model"));
const post_model_1 = __importDefault(require("../models/post.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
let seedData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield user_model_1.default.create([
        {
            _id: "62b49579d25c4e70050b5569",
            name: "Michael Crichton",
            email: "mcric@abc.com",
        },
        {
            _id: "62b49579d25c4e70050b556a",
            name: "Ian Fleming",
            email: "ianf@abc.com",
        },
        {
            _id: "62b49579d25c4e70050b556b",
            name: "John Bossak",
            email: "jbossak@abc.com",
        },
        {
            _id: "62b49579d25c4e70050b556c",
            name: "Monika Vits",
            email: "mvits@abc.com",
        },
        {
            _id: "62b49579d25c4e70050b556d",
            name: "Ricky Ponting",
            email: "rponting@abc.com",
        },
    ]);
    yield post_model_1.default.create([
        {
            _id: "62b49579d25c4e70050b5575",
            user_id: "62b49579d25c4e70050b5569",
            content: "volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor",
        },
        {
            _id: "62b49579d25c4e70050b5576",
            user_id: "62b49579d25c4e70050b556a",
            content: "a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna",
        },
        {
            _id: "62b49579d25c4e70050b5577",
            user_id: "62b49579d25c4e70050b5569",
            content: "lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at,",
        },
        {
            _id: "62b49579d25c4e70050b5578",
            user_id: "62b49579d25c4e70050b5569",
            content: "mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu",
        },
        {
            _id: "62b49579d25c4e70050b5579",
            user_id: "62b49579d25c4e70050b556b",
            content: "vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut,",
        },
        {
            _id: "62b49579d25c4e70050b557a",
            user_id: "62b49579d25c4e70050b556c",
            content: "risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque",
        },
        {
            _id: "62b49579d25c4e70050b557b",
            user_id: "62b49579d25c4e70050b556c",
            content: "at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis",
        },
        {
            _id: "62b49579d25c4e70050b557c",
            user_id: "62b49579d25c4e70050b556d",
            content: "enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida",
        },
        {
            _id: "62b49579d25c4e70050b557d",
            user_id: "62b49579d25c4e70050b556d",
            content: "Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue",
        },
        {
            _id: "62b49579d25c4e70050b557e",
            user_id: "62b49579d25c4e70050b556a",
            content: "pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent",
        },
    ]);
    yield post_comment_model_1.default.create([
        {
            _id: "62b49579d25c4e70050b55a0",
            post_id: "62b49579d25c4e70050b5575",
            user_id: "62b49579d25c4e70050b5569",
            user_comment: "purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum",
            hashtags: ["pies", "sandwiches", "salads"],
            mentions: ["six", "nine"],
        },
        {
            _id: "62b49579d25c4e70050b55a1",
            post_id: "62b49579d25c4e70050b5575",
            user_id: "62b49579d25c4e70050b5569",
            user_comment: "egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque",
            hashtags: ["soups", "salads", "desserts", "pasta"],
            mentions: ["eight", "five", "one"],
        },
        {
            _id: "62b49579d25c4e70050b55a2",
            post_id: "62b49579d25c4e70050b5575",
            user_id: "62b49579d25c4e70050b5569",
            user_comment: "risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus",
            hashtags: ["sandwiches", "pasta"],
            mentions: ["ten", "seven"],
        },
        {
            _id: "62b49579d25c4e70050b55a3",
            post_id: "62b49579d25c4e70050b5576",
            user_id: "62b49579d25c4e70050b556a",
            user_comment: "pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat,",
            hashtags: ["desserts", "pasta", "sandwiches", "soups", "salads"],
            mentions: ["four", "three"],
        },
        {
            _id: "62b49579d25c4e70050b55a4",
            post_id: "62b49579d25c4e70050b5576",
            user_id: "62b49579d25c4e70050b556a",
            user_comment: "consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis,",
            hashtags: ["salads", "desserts"],
            mentions: ["two", "eight", "five"],
        },
        {
            _id: "62b49579d25c4e70050b55a5",
            post_id: "62b49579d25c4e70050b5576",
            user_id: "62b49579d25c4e70050b556a",
            user_comment: "sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus.",
            hashtags: ["stews", "desserts", "salads"],
            mentions: ["six"],
        },
        {
            _id: "62b49579d25c4e70050b55a6",
            post_id: "62b49579d25c4e70050b5577",
            user_id: "62b49579d25c4e70050b5569",
            user_comment: "malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros",
            hashtags: ["soups", "desserts", "sandwiches"],
            mentions: ["five"],
        },
        {
            _id: "62b49579d25c4e70050b55a7",
            post_id: "62b49579d25c4e70050b5577",
            user_id: "62b49579d25c4e70050b5569",
            user_comment: "Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit",
            hashtags: ["desserts", "soups"],
            mentions: ["nine", "five"],
        },
        {
            _id: "62b49579d25c4e70050b55a8",
            post_id: "62b49579d25c4e70050b5577",
            user_id: "62b49579d25c4e70050b5569",
            user_comment: "Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend",
            hashtags: ["cereals", "soups", "desserts", "pasta"],
            mentions: ["six", "five", "one"],
        },
        {
            _id: "62b49579d25c4e70050b55a9",
            post_id: "62b49579d25c4e70050b5577",
            user_id: "62b49579d25c4e70050b5569",
            user_comment: "sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor",
            hashtags: ["pies", "sandwiches", "seafood", "desserts"],
            mentions: ["one", "three", "two"],
        },
        {
            _id: "62b49579d25c4e70050b55aa",
            post_id: "62b49579d25c4e70050b5578",
            user_id: "62b49579d25c4e70050b5569",
            user_comment: "gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla",
            hashtags: ["salads", "pies", "desserts"],
            mentions: ["one", "nine"],
        },
        {
            _id: "62b49579d25c4e70050b55ab",
            post_id: "62b49579d25c4e70050b5578",
            user_id: "62b49579d25c4e70050b5569",
            user_comment: "taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien",
            hashtags: ["pasta", "cereals"],
            mentions: ["three"],
        },
        {
            _id: "62b49579d25c4e70050b55ac",
            post_id: "62b49579d25c4e70050b5579",
            user_id: "62b49579d25c4e70050b556b",
            user_comment: "vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede",
            hashtags: ["salads", "seafood", "pies"],
            mentions: ["three"],
        },
        {
            _id: "62b49579d25c4e70050b55ad",
            post_id: "62b49579d25c4e70050b5579",
            user_id: "62b49579d25c4e70050b556b",
            user_comment: "Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede.",
            hashtags: ["stews", "cereals", "soups"],
            mentions: ["three", "two"],
        },
        {
            _id: "62b49579d25c4e70050b55ae",
            post_id: "62b49579d25c4e70050b5579",
            user_id: "62b49579d25c4e70050b556b",
            user_comment: "nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean",
            hashtags: ["cereals", "pasta", "soups", "noodles"],
            mentions: ["ten", "five", "six"],
        },
        {
            _id: "62b49579d25c4e70050b55af",
            post_id: "62b49579d25c4e70050b557a",
            user_id: "62b49579d25c4e70050b556c",
            user_comment: "egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget",
            hashtags: ["sandwiches", "desserts", "stews", "salads"],
            mentions: ["eight", "seven", "two"],
        },
        {
            _id: "62b49579d25c4e70050b55e0",
            post_id: "62b49579d25c4e70050b557a",
            user_id: "62b49579d25c4e70050b556c",
            user_comment: "purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante",
            hashtags: ["noodles", "salads", "pies", "cereals", "seafood"],
            mentions: ["six", "ten", "eight"],
        },
        {
            _id: "62b49579d25c4e70050b55e1",
            post_id: "62b49579d25c4e70050b557a",
            user_id: "62b49579d25c4e70050b556c",
            user_comment: "amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere, enim nisl",
            hashtags: ["salads", "sandwiches", "cereals"],
            mentions: ["six", "ten", "nine"],
        },
        {
            _id: "62b49579d25c4e70050b55e2",
            post_id: "62b49579d25c4e70050b557b",
            user_id: "62b49579d25c4e70050b556c",
            user_comment: "tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit",
            hashtags: ["desserts", "sandwiches", "salads"],
            mentions: ["nine", "eight"],
        },
        {
            _id: "62b49579d25c4e70050b55e3",
            post_id: "62b49579d25c4e70050b557b",
            user_id: "62b49579d25c4e70050b556c",
            user_comment: "blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas",
            hashtags: ["soups", "stews", "seafood", "salads", "pasta"],
            mentions: ["one", "two"],
        },
    ]);
});
exports.default = seedData;
