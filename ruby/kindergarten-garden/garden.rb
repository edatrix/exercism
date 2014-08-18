class Garden

  def initialize(diagram, students = "name")
    @diagram = diagram
    @students = students
  end

  def alice
    d = @diagram.gsub(/\s+/, "").chars
    d.map do |plant|
      plants[plant]
    end
  end

  def bob
    d = @diagram.gsub(/\s+/, "").chars
    d.map do |plant|
      plants[plant]
    end
  end

  def plants
    { "C" => :clover,
      "G" => :grass,
      "R" => :radishes,
      "V" => :violets
    }
  end

end
