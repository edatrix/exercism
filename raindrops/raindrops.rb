class Raindrops

  def convert(number)

    s = ""
    if pling?(number)
      s << "Pling"
    end

    if plang?(number)
      s << "Plang"
    end

    if plong?(number)
      s << "Plong"
    end

    if s == ""
      s << number.to_s
    end

    s

  end

  def pling?(number)
    number % 3 == 0
  end

  def plang?(number)
    number % 5 == 0
  end

  def plong?(number)
    number % 7 == 0
  end

end
