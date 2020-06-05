
// Creating our User model
module.exports = function (sequelize, DataTypes) {
    var Workout = sequelize.define("Workout", {
        // The email cannot be null, and must be a proper email before creation
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        // The password cannot be null
        sets: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        reps: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        break: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        level: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Beginner"
        }
    });

    Workout.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Workout.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Workout;
};