import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.StackPane;
import javafx.scene.text.Font;
import javafx.scene.text.FontWeight;
import javafx.stage.Stage;

public class AnimatedTitleTextHover extends Application {

    @Override
    public void start(Stage primaryStage) {
        // Create a label with initial text
        Label titleLabel = new Label("Hover Over Me!");
        titleLabel.setFont(Font.font("Verdana", FontWeight.BOLD, 24));

        // Define hover effect
        titleLabel.setOnMouseEntered(e -> {
            titleLabel.setScaleX(1.2);
            titleLabel.setScaleY(1.2);
        });
        titleLabel.setOnMouseExited(e -> {
            titleLabel.setScaleX(1.0);
            titleLabel.setScaleY(1.0);
        });

        // StackPane to hold the label
        StackPane root = new StackPane();
        root.getChildren().add(titleLabel);

        // Create the scene and set it to the stage
        Scene scene = new Scene(root, 300, 200);
        primaryStage.setScene(scene);
        primaryStage.setTitle("Animated Title Text Hover");
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
